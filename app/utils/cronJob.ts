import cron from "node-cron";
import { error, log } from "./logger";

class CronJob {
  init(callback: () => any, cronExpression: string) {
    cron.schedule(cronExpression, callback);
  }
}

export const cronJob = new CronJob();
