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
