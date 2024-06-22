import winston from 'winston';

const { combine, printf, colorize } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    colorize(),
    printf((info) => `${info.level}: ${info.message}`)
  ),
  transports: [new winston.transports.Console()],
});

export default logger;
