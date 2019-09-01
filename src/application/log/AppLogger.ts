export default class AppLogger {
    public log(log: string) {
        Logger.log(log);
        console.log(log);
    }
}