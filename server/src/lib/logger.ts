import morgan, { TokenIndexer } from "morgan";
import chalk from "chalk";

// Status kodlarına göre renk
const statusColor = (status?: number) => {
  if (!status) return chalk.white;
  if (status >= 500) return chalk.red;     // server error
  if (status >= 400) return chalk.yellow;  // client error
  if (status >= 300) return chalk.cyan;    // redirects
  if (status >= 200) return chalk.green;   // success
  return chalk.white;
};

// İstanbul tarihi
const getIstanbulDate = () => {
  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    dateStyle: "short",
    timeStyle: "medium",
  }).format(new Date());
};

// Custom format
morgan.format("custom", (tokens: TokenIndexer, req, res) => {
  const method = chalk.blue.bold(tokens.method(req, res) || "");
  const url = chalk.magenta(tokens.url(req, res) || "");
  const status = tokens.status(req, res);
  const statusMsg = statusColor(Number(status))(status || "");
  const responseTime = chalk.yellow(tokens["response-time"](req, res) + " ms");

  const ip =
    (req.headers["x-forwarded-for"] as string) ||
    req.socket.remoteAddress ||
    "unknown";

  const date = chalk.gray(getIstanbulDate());

  return `${date} | ${chalk.cyan(ip)} | ${method} ${url} → ${statusMsg} (${responseTime})`;
});

export const logger = morgan("custom");
