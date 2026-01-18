export type File = {
  /**
   * The URL where the file can be downloaded from.
   */
  url: string;
  /**
   * The mime type of the file.
   */
  content_type?: string;
  /**
   * The name of the file. It will be auto-generated if not provided.
   */
  file_name?: string;
  /**
   * The size of the file in bytes.
   */
  file_size?: number;
  /**
   * File data
   */
  file_data?: string;
};

export type Image = File & {
  /**
   * The width of the image in pixels.
   */
  width?: number;
  /**
   * The height of the image in pixels.
   */
  height?: number;
};

export type IllusionDiffusionInput = {
  prompt: string;
  image_url: string | Blob | File;
  image_size: "square" | "square_hd" | "square_uhd" | "square_4k" | "square_8k";
};
export type IllusionDiffusionOutput = {
  /**
   * The generated image
   */
  image: string;
};

export type EndpointTypeMap = {
  "modelrunner/illusion-diffusion": {
    input: IllusionDiffusionInput;
    output: IllusionDiffusionOutput;
  };
};
