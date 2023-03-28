const router = require("express").Router();
const { Employee } = require("../../models");
const emails = require("../../helpers/emails");
/* 
URL route:    /api/employee
*/

// GET all employee data
router.get("/", async (req, res) => {
  try {
    const employeeData = await Employee.findAll({
      where: { merchant_id: req.session.currentMerchant },
    });
    res.status(200).json(employeeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one employee's data by ID in request url
router.get("/:id", async (req, res) => {
  try {
    const employeeData = await Employee.findByPk(req.params.id);

    res.status(200).json(employeeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Add new employee
router.post("/", async (req, res) => {
  /*
Request Body should be as follows:

{
  name:  STRING,
  email: STRING,
  role:  STRING,
  login_id: STRING,
  is_manager: BOOLEAN,
}

*/
  try {
    // assign merchant_id from session variable
    req.body.merchant_id = req.session.currentMerchant;
    req.session;
    const employeeData = await Employee.create(req.body);
    await emails.sendNewEmployeeEmail(
      employeeData,
      req.session.currentMerchantName
    );
    res.status(200).json(employeeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update Employee
router.put("/:id", async (req, res) => {
  /*
Request Body should be as follows:

{
  name:  STRING,
  email: STRING,
  role:  STRING,
  is_manager: BOOLEAN,
}

*/
  try {
    const employeeData = await Employee.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(employeeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Remove Employee
router.delete("/:id", async (req, res) => {
  /*
Request Body should be as follows:


*/

  try {
    const employeeData = await Employee.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(employeeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Employee Login
router.post("/login", async (req, res) => {
  /* 
req.body should be:

{
  login_id: INT
}

*/
  try {
    const dbEmployeeData = await Employee.findOne({
      where: {
        login_id: req.body.login_id,
        merchant_id: req.session.currentMerchant,
      },
    });

    if (!dbEmployeeData) {
      res
        .status(400)
        .json({ message: "No employee found.  Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.employeeLoggedIn = true;
      // create session object keys for current employee logged in
      req.session.currentEmployee = dbEmployeeData.name;
      req.session.currentEmployeeID = dbEmployeeData.id;
      req.session.isAdmin = dbEmployeeData.is_manager;
      res
        .status(200)
        .json({ user: dbEmployeeData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Employee Logout
router.get("/logout", async (req, res) => {
  /* 
req.body should be:

{
  login_id: INT
}

*/
  try {
    req.session.employeeLoggedIn = false;
    // update session keys
    req.session.currentEmployee = null;
    req.session.currentEmployeeID = null;
    req.session.isAdmin = null;
    res.send("/pos/login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
