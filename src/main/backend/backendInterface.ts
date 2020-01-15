import * as fs from 'fs';

const backendInterface: BackendInterface = {
    readDir: () => fs.readdirSync('./')
};

export default backendInterface;
