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

module.exports = router;
