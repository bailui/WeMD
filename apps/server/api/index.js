const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('../dist/app.module');

let appPromise;

async function getApp() {
  if (!appPromise) {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.setGlobalPrefix('api');
    await app.init();
    appPromise = app;
  }
  return appPromise;
}

module.exports = async (req, res) => {
  try {
    const app = await getApp();
    const instance = app.getHttpAdapter().getInstance();
    instance(req, res);
  } catch (error) {
    console.error('NestJS serverless error:', error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};
