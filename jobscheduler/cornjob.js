import { Router } from "express";
import { schedule as _schedule } from "node-cron";
const router = Router();

router.post("/schedule", (_, res) => {
  try {
    var d = new Date();
    var min = new d.getMinutes();
    var date = d.getDate();
    var month = d.getMonth(); //0-11 +1
    var hour = d.getHours();
    _schedule(
      " ${min+1} ${hour} ${date} ${month + 1} *",
      () => {
        console.log("Task Completed at ${hour} : ${min+1}");
      },
      {
        schedule: true,
        timezone: "Asia/Karachi",
      }
    );

    res.status(201).json({ msg: "JOb scheduled" });
  } catch (err) {
    res.status(500).send("Something Went Wrong!");
  }
});
