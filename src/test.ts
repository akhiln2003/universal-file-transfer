// src/test.ts
import { UniversalFileConverter } from './index';
import fs from 'fs';

async function testFileConversion() {
    const converter = new UniversalFileConverter();
    const inputFile = fs.readFileSync('/home/akhil/images/test.jpg'); // Update this path
    const outputFormat = 'png'; // Specify desired output format
    
    try {
        const convertedFile = await converter.convert(inputFile, outputFormat);
        fs.writeFileSync('/home/akhil/images/output.png', convertedFile); // Update this path as well
        console.log('File converted successfully!');
    } catch (error: unknown) {
        // Use type assertion to access the error message
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error('An unknown error occurred');
        }
    }
}

testFileConversion();
