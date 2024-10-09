import sharp, { FormatEnum } from 'sharp';

// Define the FileConverter interface
export interface FileConverter {
    convert(inputFile: Buffer, outputFormat: keyof FormatEnum): Promise<Buffer>;
}

// Implement the UniversalFileConverter class
export class UniversalFileConverter implements FileConverter {
    async convert(inputFile: Buffer, outputFormat: keyof FormatEnum): Promise<Buffer> {
        try {
            // Use sharp to convert the file
            const outputBuffer = await sharp(inputFile).toFormat(outputFormat).toBuffer();
            return outputBuffer;
        } catch (error: unknown) {
            // Type assertion for error handling
            if (error instanceof Error) {
                throw new Error(`Conversion failed: ${error.message}`);
            } else {
                throw new Error('Conversion failed: An unknown error occurred');
            }
        }
    }
}
