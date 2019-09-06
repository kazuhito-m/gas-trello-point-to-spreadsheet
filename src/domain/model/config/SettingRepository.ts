import Settings from './Settings';

export default interface SettingRepository {
    get(): Settings;
}
