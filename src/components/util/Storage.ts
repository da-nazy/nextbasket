
import { StorageKey } from ".";
export default class Storage {

    static getItem<T, D>(key:StorageKey, defaultValue?: D): T | D {
		if (typeof window !== 'undefined') {
			// Perform localStorage action
			const data = localStorage.getItem(key)
			try{
                if (data) {
                     return (JSON.parse(data)) as T; 
			}
            }catch(e){
                console.error('Error parsing JSON:', e);
            }
		  }
        return (defaultValue || null) as any;
    }

    static saveItem<T>(key: StorageKey, value: T): void {
        const data = JSON?.stringify(value);
        localStorage.setItem(key, data);
    }

    static deleteItem(key: StorageKey) {
        localStorage.removeItem(key);
    }
}