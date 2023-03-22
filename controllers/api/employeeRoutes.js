const router = require("express").Router();
const { Employee } = require("../models");

/* 
URL route:    /api/employees
*/

// GET all employee data
router.get("/", async (req, res) => {
  try {
    const employeeData = await Employee.findAll();

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
  id:  INT,
  name:  STRING,
  role:  STRING,
}

*/
  try {
    const employeeData = await Employee.create(req.body);
    res.status(200).json(employeeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update Employee
router.put("/", async (req, res) => {
  /*
Request Body should be as follows:

{
  id:  INT,
  name:  STRING,
  role:  STRING,
}

*/
  try {
    const employeeData = await Employee.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json(employeeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Remove Employee
router.delete("/", async (req, res) => {
  /*
Request Body should be as follows:

{
  id:  INT
}

*/

  try {
    const employeeData = await Employee.destroy({
      where: {
        id: req.body.id,
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
  id: INT
}

*/
  try {
    const dbMerchantData = await Merchant.findOne({
      where: {
        id: req.body.id,
      },
    });

    if (!dbMerchantData) {
      res
        .status(400)
        .json({ message: "No employee found.  Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.employeeLoggedIn = true;
      res
        .status(200)
        .json({ user: dbMerchantData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Employee Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
