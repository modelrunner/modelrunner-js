export type Audio = {
  /**
   * Type of media (always 'audio') Default value: `"audio"`
   */
  media_type?: "audio";
  /**
   * URL where the media file can be accessed
   */
  url: string;
  /**
   * MIME type of the media file
   */
  content_type: string;
  /**
   * Original filename of the media
   */
  file_name: string;
  /**
   * Size of the file in bytes
   */
  file_size: number;
  /**
   * Duration of the media in seconds
   */
  duration: number;
  /**
   * Overall bitrate of the media in bits per second
   */
  bitrate: number;
  /**
   * Codec used to encode the media
   */
  codec: string;
  /**
   * Container format of the media file (e.g., 'mp4', 'mov')
   */
  container: string;
  /**
   * Number of audio channels
   */
  channels: number;
  /**
   * Audio sample rate in Hz
   */
  sample_rate: number;
};
export type AudioFile = {
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
  /**
   * The duration of the audio file in seconds.
   */
  duration: number;
};
export type AudioTrack = {
  /**
   * Audio codec used (e.g., 'aac', 'mp3')
   */
  codec: string;
  /**
   * Number of audio channels
   */
  channels: number;
  /**
   * Audio sample rate in Hz
   */
  sample_rate: number;
  /**
   * Audio bitrate in bits per second
   */
  bitrate: number;
};
export type BoundingBox = {
  /**
   * X-coordinate of the top-left corner
   */
  x: number;
  /**
   * Y-coordinate of the top-left corner
   */
  y: number;
  /**
   * Width of the bounding box
   */
  w: number;
  /**
   * Height of the bounding box
   */
  h: number;
  /**
   * Label of the bounding box
   */
  label: string;
};
export type BoundingBoxes = {
  /**
   * List of bounding boxes
   */
  bboxes: Array<BoundingBox>;
};
export type BoundingBoxOutputWithLabels = {
  /**
   * Results from the model
   */
  results: BoundingBoxes;
  /**
   * Processed image
   */
  image?: Image;
};
export type BoxPrompt = {
  /**
   * X Min Coordinate of the box
   */
  x_min?: number;
  /**
   * Y Min Coordinate of the box
   */
  y_min?: number;
  /**
   * X Max Coordinate of the prompt
   */
  x_max?: number;
  /**
   * Y Max Coordinate of the prompt
   */
  y_max?: number;
};
export type Color = {
  /**
   * Red value Default value: `128`
   */
  r?: number;
  /**
   * Green value Default value: `128`
   */
  g?: number;
  /**
   * Blue value Default value: `128`
   */
  b?: number;
};
export type ControlLoraWeight = {
  /**
   * URL or the path to the LoRA weights.
   */
  path: string;
  /**
   * The scale of the LoRA weight. This is used to scale the LoRA weight
   * before merging it with the base model. Providing a dictionary as {"layer_name":layer_scale} allows per-layer lora scale settings. Layers with no scale provided will have scale 1.0. Default value: `1`
   */
  scale?: any | number;
  /**
   * URL of the image to be used as the control image.
   */
  control_image_url: string | Blob | File;
  /**
   * Type of preprocessing to apply to the input image. Default value: `"None"`
   */
  preprocess?: "canny" | "depth" | "None";
};
export type ControlNet = {
  /**
   * URL or the path to the control net weights.
   */
  path: string;
  /**
   * optional URL to the controlnet config.json file.
   */
  config_url?: string | Blob | File;
  /**
   * The optional variant if a Hugging Face repo key is used.
   */
  variant?: string;
  /**
   * URL of the image to be used as the control net.
   */
  image_url: string | Blob | File;
  /**
   * The mask to use for the controlnet. When using a mask, the control image size and the mask size must be the same and divisible by 32.
   */
  mask_url?: string | Blob | File;
  /**
   * The scale of the control net weight. This is used to scale the control net weight
   * before merging it with the base model. Default value: `1`
   */
  conditioning_scale?: number;
  /**
   * The percentage of the image to start applying the controlnet in terms of the total timesteps.
   */
  start_percentage?: number;
  /**
   * The percentage of the image to end applying the controlnet in terms of the total timesteps. Default value: `1`
   */
  end_percentage?: number;
  /**
   * The index of the IP adapter to be applied to the controlnet. This is only needed for InstantID ControlNets.
   */
  ip_adapter_index?: number;
};
export type ControlNetUnion = {
  /**
   * URL or the path to the control net weights.
   */
  path: string;
  /**
   * optional URL to the controlnet config.json file.
   */
  config_url?: string | Blob | File;
  /**
   * The optional variant if a Hugging Face repo key is used.
   */
  variant?: string;
  /**
   * The control images and modes to use for the control net.
   */
  controls: Array<ControlNetUnionInput>;
};
export type DiarizationSegment = {
  /**
   * Start and end timestamp of the segment
   */
  timestamp: Array<void>;
  /**
   * Speaker ID of the segment
   */
  speaker: string;
};
export type Embedding = {
  /**
   * URL or the path to the embedding weights.
   */
  path: string;
  /**
   * The list of tokens to use for the embedding. Default value: `<s0>,<s1>`
   */
  tokens?: Array<string>;
};
export type FaceDetection = {
  /**
   * Bounding box of the face.
   */
  bbox: Array<number>;
  /**
   * Keypoints of the face.
   */
  kps?: Array<Array<number>>;
  /**
   * Keypoints of the face on the image.
   */
  kps_image: Image;
  /**
   * Confidence score of the detection.
   */
  det_score: number;
  /**
   * Embedding of the face.
   */
  embedding_file: File;
  /**
   * Either M or F if available.
   */
  sex?: string;
};
export type FastTextToImageRequest = {
  /**
   * The prompt you would like to use to generate images.
   */
  prompt: string;
  /**
   * The negative prompt you would like to use to generate images. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * How many images you would like to generate. When using any Guidance Method, Value is set to 1. Default value: `4`
   */
  num_images?: number;
  /**
   * The aspect ratio of the image. When a guidance method is being used, the aspect ratio is defined by the guidance image and this parameter is ignored. Default value: `"1:1"`
   */
  aspect_ratio?:
    | "1:1"
    | "2:3"
    | "3:2"
    | "3:4"
    | "4:3"
    | "4:5"
    | "5:4"
    | "9:16"
    | "16:9";
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of iterations the model goes through to refine the generated image. This parameter is optional. Default value: `8`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * When set to true, enhances the provided prompt by generating additional, more descriptive variations, resulting in more diverse and creative output images.
   */
  prompt_enhancement?: boolean;
  /**
   * Which medium should be included in your generated images. This parameter is optional.
   */
  medium?: "photography" | "art";
  /**
   * Guidance images to use for the generation. Up to 4 guidance methods can be combined during a single inference. Default value: ``
   */
  guidance?: Array<GuidanceInput>;
};
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
export type FluxProRedux = {
  /**
   * The prompt to generate an image from. Default value: `""`
   */
  prompt?: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The image URL to generate an image from. Needs to match the dimensions of the mask.
   */
  image_url: string | Blob | File;
};
export type FluxProUltraTextToImageInputRedux = {
  /**
   * The prompt to generate an image from. Default value: `""`
   */
  prompt?: string;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The aspect ratio of the generated image. Default value: `"16:9"`
   */
  aspect_ratio?: "21:9" | "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "9:21";
  /**
   * Generate less processed, more natural-looking images.
   */
  raw?: boolean;
  /**
   * The image URL to generate an image from. Needs to match the dimensions of the mask.
   */
  image_url: string | Blob | File;
  /**
   * The strength of the image prompt, between 0 and 1. Default value: `0.1`
   */
  image_prompt_strength?: number;
};
export type Frame = {
  /**
   * URL of the frame
   */
  url: string;
};
export type HunyuanV2VRequest = {
  /**
   * The prompt to generate the video from.
   */
  prompt: string;
  /**
   * The seed to use for generating the video.
   */
  seed?: number | null;
  /**
   * By default, generations are done with 35 steps. Pro mode does 55 steps which results in higher quality videos but will take more time and cost 2x more billing units.
   */
  pro_mode?: boolean;
  /**
   * The aspect ratio of the video to generate. Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16";
  /**
   * The resolution of the video to generate. Default value: `"720p"`
   */
  resolution?: "480p" | "580p" | "720p";
  /**
   * The number of frames to generate. Default value: `"129"`
   */
  num_frames?: "129" | "85";
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * URL of the video input.
   */
  video_url: string | Blob | File;
  /**
   * Strength for Video-to-Video Default value: `0.8`
   */
  strength?: number;
};
export type Image = {
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
  /**
   * The width of the image in pixels.
   */
  width?: number;
  /**
   * The height of the image in pixels.
   */
  height?: number;
};
export type ImagePrompt = {
  /**
   *  Default value: `"ImagePrompt"`
   */
  type?: "ImagePrompt" | "PyraCanny" | "CPDS" | "FaceSwap";
  /**
   *
   */
  image_url?: string | Blob | File;
  /**
   *  Default value: `0.5`
   */
  stop_at?: number;
  /**
   *  Default value: `1`
   */
  weight?: number;
};
export type ImageSize = {
  /**
   * The width of the generated image. Default value: `512`
   */
  width?: number;
  /**
   * The height of the generated image. Default value: `512`
   */
  height?: number;
};
export type ImageToVideoRequest = {
  /**
   *
   */
  prompt: string;
  /**
   *
   */
  image_url: string | Blob | File;
  /**
   * The duration of the generated video in seconds Default value: `"5"`
   */
  duration?: "5" | "10";
  /**
   * The aspect ratio of the generated video frame Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16" | "1:1";
};
export type InputV2 = {
  /**
   * URL of the image to remove background from
   */
  image_url: string | Blob | File;
  /**
   * Model to use for background removal.
   * The 'General Use (Light)' model is the original model used in the BiRefNet repository.
   * The 'General Use (Light)' model is the original model used in the BiRefNet repository but trained with 2K images.
   * The 'General Use (Heavy)' model is a slower but more accurate model.
   * The 'Matting' model is a model trained specifically for matting images.
   * The 'Portrait' model is a model trained specifically for portrait images.
   * The 'General Use (Light)' model is recommended for most use cases.
   *
   * The corresponding models are as follows:
   * - 'General Use (Light)': BiRefNet-DIS_ep580.pth
   * - 'General Use (Heavy)': BiRefNet-massive-epoch_240.pth
   * - 'Portrait': BiRefNet-portrait-TR_P3M_10k-epoch_120.pth Default value: `"General Use (Light)"`
   */
  model?:
    | "General Use (Light)"
    | "General Use (Light 2K)"
    | "General Use (Heavy)"
    | "Matting"
    | "Portrait";
  /**
   * The resolution to operate on. The higher the resolution, the more accurate the output will be for high res input images. Default value: `"1024x1024"`
   */
  operating_resolution?: "1024x1024" | "2048x2048";
  /**
   * The format of the output image Default value: `"png"`
   */
  output_format?: "webp" | "png";
  /**
   * Whether to output the mask used to remove the background
   */
  output_mask?: boolean;
  /**
   * Whether to refine the foreground using the estimated mask Default value: `true`
   */
  refine_foreground?: boolean;
};
export type IPAdapter = {
  /**
   * URL of the image to be used as the IP adapter.
   */
  ip_adapter_image_url: string | Blob | File | Array<string | Blob | File>;
  /**
   * The mask to use for the IP adapter. When using a mask, the ip-adapter image size and the mask size must be the same
   */
  ip_adapter_mask_url?: string | Blob | File;
  /**
   * URL or the path to the IP adapter weights.
   */
  path: string;
  /**
   * Subfolder in the model directory where the IP adapter weights are stored.
   */
  model_subfolder?: string;
  /**
   * Name of the weight file.
   */
  weight_name?: string;
  /**
   * URL or the path to the InsightFace model weights.
   */
  insight_face_model_path?: string;
  /**
   * The scale of the IP adapter weight. This is used to scale the IP adapter weight
   * before merging it with the base model. Default value: `1`
   */
  scale?: number;
  /**
   * The scale of the IP adapter weight. This is used to scale the IP adapter weight
   * before merging it with the base model.
   */
  scale_json?: Record<string, any>;
  /**
   * The factor to apply to the unconditional noising of the IP adapter.
   */
  unconditional_noising_factor?: number;
  /**
   * The value to set the image projection shortcut to. For FaceID plus V1 models,
   * this should be set to False. For FaceID plus V2 models, this should be set to True.
   * Default is True. Default value: `true`
   */
  image_projection_shortcut?: boolean;
};
export type Keyframe = {
  /**
   * The timestamp in milliseconds where this keyframe starts
   */
  timestamp: number;
  /**
   * The duration in milliseconds of this keyframe
   */
  duration: number;
  /**
   * The URL where this keyframe's media file can be accessed
   */
  url: string;
};
export type LoraWeight = {
  /**
   * URL or the path to the LoRA weights. Or HF model name.
   */
  path: string;
  /**
   * The scale of the LoRA weight. This is used to scale the LoRA weight
   * before merging it with the base model. Default value: `1`
   */
  scale?: number;
  /**
   * If set to true, the embedding will be forced to be used.
   */
  force?: boolean;
};
export type MoondreamInputParam = {
  /**
   * URL of the image to be processed
   */
  image_url: string | Blob | File;
  /**
   * Prompt to be used for the image Default value: `"Describe this image."`
   */
  prompt?: string;
};
export type OCRBoundingBox = {
  /**
   * List of quadrilateral boxes
   */
  quad_boxes: Array<OCRBoundingBoxSingle>;
};
export type OCRBoundingBoxOutputWithLabels = {
  /**
   * Results from the model
   */
  results: OCRBoundingBox;
  /**
   * Processed image
   */
  image?: Image;
};
export type OCRBoundingBoxSingle = {
  /**
   * X-coordinate of the top-left corner
   */
  x: number;
  /**
   * Y-coordinate of the top-left corner
   */
  y: number;
  /**
   * Width of the bounding box
   */
  w: number;
  /**
   * Height of the bounding box
   */
  h: number;
  /**
   * Label of the bounding box
   */
  label: string;
};
export type PointPrompt = {
  /**
   * X Coordinate of the prompt Default value: `305`
   */
  x?: number;
  /**
   * Y Coordinate of the prompt Default value: `350`
   */
  y?: number;
  /**
   * Label of the prompt. 1 for foreground, 0 for background Default value: `"1"`
   */
  label?: "0" | "1";
};
export type Polygon = {
  /**
   * List of points
   */
  points: Array<any>;
  /**
   * Label of the polygon
   */
  label: string;
};
export type PolygonOutputWithLabels = {
  /**
   * Results from the model
   */
  results: PolygonOutput;
  /**
   * Processed image
   */
  image?: Image;
};
export type Ray2TextToVideoRequest = {
  /**
   *
   */
  prompt: string;
  /**
   * The aspect ratio of the generated video Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16" | "4:3" | "3:4" | "21:9" | "9:21";
  /**
   * Whether the video should loop (end of video is blended with the beginning)
   */
  loop?: boolean;
  /**
   *  Default value: `"540p"`
   */
  resolution?: "540p" | "720p";
  /**
   *  Default value: `"5s"`
   */
  duration?: "5s" | "9s";
};
export type ReferenceFace = {
  /**
   * URL of the reference face image
   */
  image_url: string | Blob | File;
};
export type Region = {
  /**
   * X-coordinate of the top-left corner
   */
  x1: number;
  /**
   * Y-coordinate of the top-left corner
   */
  y1: number;
  /**
   * X-coordinate of the bottom-right corner
   */
  x2: number;
  /**
   * Y-coordinate of the bottom-right corner
   */
  y2: number;
};
export type Resolution = {
  /**
   * Display aspect ratio (e.g., '16:9')
   */
  aspect_ratio: string;
  /**
   * Width of the video in pixels
   */
  width: number;
  /**
   * Height of the video in pixels
   */
  height: number;
};
export type RGBColor = {
  /**
   * Red color value
   */
  r?: number;
  /**
   * Green color value
   */
  g?: number;
  /**
   * Blue color value
   */
  b?: number;
};
export type SubjectReferenceRequest = {
  /**
   *
   */
  prompt: string;
  /**
   * URL of the subject reference image to use for consistent subject appearance
   */
  subject_reference_image_url: string | Blob | File;
  /**
   * Whether to use the model's prompt optimizer Default value: `true`
   */
  prompt_optimizer?: boolean;
};
export type TextToImageRequest = {
  /**
   * The prompt you would like to use to generate images.
   */
  prompt: string;
  /**
   * The negative prompt you would like to use to generate images. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * How many images you would like to generate. When using any Guidance Method, Value is set to 1. Default value: `4`
   */
  num_images?: number;
  /**
   * The aspect ratio of the image. When a guidance method is being used, the aspect ratio is defined by the guidance image and this parameter is ignored. Default value: `"1:1"`
   */
  aspect_ratio?:
    | "1:1"
    | "2:3"
    | "3:2"
    | "3:4"
    | "4:3"
    | "4:5"
    | "5:4"
    | "9:16"
    | "16:9";
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of iterations the model goes through to refine the generated image. This parameter is optional. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * When set to true, enhances the provided prompt by generating additional, more descriptive variations, resulting in more diverse and creative output images.
   */
  prompt_enhancement?: boolean;
  /**
   * Which medium should be included in your generated images. This parameter is optional.
   */
  medium?: "photography" | "art";
  /**
   * Guidance images to use for the generation. Up to 4 guidance methods can be combined during a single inference. Default value: ``
   */
  guidance?: Array<GuidanceInput>;
};
export type TextToVideoLiveRequest = {
  /**
   *
   */
  prompt: string;
  /**
   * Whether to use the model's prompt optimizer Default value: `true`
   */
  prompt_optimizer?: boolean;
};
export type TextToVideoRequest = {
  /**
   *
   */
  prompt: string;
  /**
   * The duration of the generated video in seconds Default value: `"5"`
   */
  duration?: "5" | "10";
  /**
   * The aspect ratio of the generated video frame Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16" | "1:1";
};
export type Track = {
  /**
   * Unique identifier for the track
   */
  id: string;
  /**
   * Type of track ('video' or 'audio')
   */
  type: string;
  /**
   * List of keyframes that make up this track
   */
  keyframes: Array<Keyframe>;
};
export type Video = {
  /**
   * Type of media (always 'video') Default value: `"video"`
   */
  media_type?: "video";
  /**
   * URL where the media file can be accessed
   */
  url: string;
  /**
   * MIME type of the media file
   */
  content_type: string;
  /**
   * Original filename of the media
   */
  file_name: string;
  /**
   * Size of the file in bytes
   */
  file_size: number;
  /**
   * Duration of the media in seconds
   */
  duration: number;
  /**
   * Overall bitrate of the media in bits per second
   */
  bitrate: number;
  /**
   * Codec used to encode the media
   */
  codec: string;
  /**
   * Container format of the media file (e.g., 'mp4', 'mov')
   */
  container: string;
  /**
   * Frames per second
   */
  fps: number;
  /**
   * Total number of frames in the video
   */
  frame_count: number;
  /**
   * Time base used for frame timestamps
   */
  timebase: string;
  /**
   * Video resolution information
   */
  resolution: Resolution;
  /**
   * Detailed video format information
   */
  format: VideoFormat;
  /**
   * Audio track information if video has audio
   */
  audio?: AudioTrack;
  /**
   * URL of the extracted first frame
   */
  start_frame_url?: string | Blob | File;
  /**
   * URL of the extracted last frame
   */
  end_frame_url?: string | Blob | File;
};
export type VideoFormat = {
  /**
   * Container format of the video
   */
  container: string;
  /**
   * Video codec used (e.g., 'h264')
   */
  video_codec: string;
  /**
   * Codec profile (e.g., 'main', 'high')
   */
  profile: string;
  /**
   * Codec level (e.g., 4.1)
   */
  level: number;
  /**
   * Pixel format used (e.g., 'yuv420p')
   */
  pixel_format: string;
  /**
   * Video bitrate in bits per second
   */
  bitrate: number;
};
export type WhisperChunk = {
  /**
   * Start and end timestamp of the chunk
   */
  timestamp: Array<void>;
  /**
   * Transcription of the chunk
   */
  text: string;
};
export type AMTFrameInterpolationInput = {
  /**
   * Frames to interpolate
   */
  frames: Array<Frame>;
  /**
   * Output frames per second Default value: `24`
   */
  output_fps?: number;
  /**
   * Number of recursive interpolation passes Default value: `4`
   */
  recursive_interpolation_passes?: number;
};
export type AmtInterpolationFrameInterpolationInput = {
  /**
   * Frames to interpolate
   */
  frames: Array<Frame>;
  /**
   * Output frames per second Default value: `24`
   */
  output_fps?: number;
  /**
   * Number of recursive interpolation passes Default value: `4`
   */
  recursive_interpolation_passes?: number;
};
export type AmtInterpolationFrameInterpolationOutput = {
  /**
   * Generated video
   */
  video: File;
};
export type AmtInterpolationInput = {
  /**
   * URL of the video to be processed
   */
  video_url: string | Blob | File;
  /**
   * Output frames per second Default value: `24`
   */
  output_fps?: number;
  /**
   * Number of recursive interpolation passes Default value: `2`
   */
  recursive_interpolation_passes?: number;
};
export type AMTInterpolationInput = {
  /**
   * URL of the video to be processed
   */
  video_url: string | Blob | File;
  /**
   * Output frames per second Default value: `24`
   */
  output_fps?: number;
  /**
   * Number of recursive interpolation passes Default value: `2`
   */
  recursive_interpolation_passes?: number;
};
export type AmtInterpolationOutput = {
  /**
   * Generated video
   */
  video: File;
};
export type AnimatediffSparsectrlLcmInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to specify what you don't want. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The type of controlnet to use for generating the video. The controlnet determines how the video will be animated. Default value: `"scribble"`
   */
  controlnet_type?: "scribble" | "rgb";
  /**
   * Increasing the amount of steps tells Stable Diffusion that it should take more steps to generate your final result which can increase the amount of detail in your image. Default value: `4`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when looking for a related image to show you. Default value: `1`
   */
  guidance_scale?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable
   * Diffusion will output the same image every time.
   */
  seed?: number;
  /**
   * The URL of the first keyframe to use for the generation.
   */
  keyframe_0_image_url?: string | Blob | File;
  /**
   * The frame index of the first keyframe to use for the generation.
   */
  keyframe_0_index?: number;
  /**
   * The URL of the second keyframe to use for the generation.
   */
  keyframe_1_image_url?: string | Blob | File;
  /**
   * The frame index of the second keyframe to use for the generation.
   */
  keyframe_1_index?: number;
  /**
   * The URL of the third keyframe to use for the generation.
   */
  keyframe_2_image_url?: string | Blob | File;
  /**
   * The frame index of the third keyframe to use for the generation.
   */
  keyframe_2_index?: number;
};
export type AnimatediffSparsectrlLcmOutput = {
  /**
   * Generated video file.
   */
  video: File;
  /**
   * The seed used to generate the video.
   */
  seed: number;
};
export type AnimateDiffT2VInput = {
  /**
   * The prompt to use for generating the video. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `"(bad quality, worst quality:1.2), ugly faces, bad anime"`
   */
  negative_prompt?: string;
  /**
   * The number of frames to generate for the video. Default value: `16`
   */
  num_frames?: number;
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Number of frames per second to extract from the video. Default value: `8`
   */
  fps?: number;
  /**
   * The motions to apply to the video.
   */
  motions?: Array<
    "zoom-out" | "zoom-in" | "pan-left" | "pan-right" | "tilt-up" | "tilt-down"
  >;
  /**
   * The size of the video to generate. Default value: `square`
   */
  video_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
};
export type AnimateDiffT2VOutput = {
  /**
   * Generated video file.
   */
  video: File;
  /**
   * Seed used for generating the video.
   */
  seed: number;
};
export type AnimateDiffT2VTurboInput = {
  /**
   * The prompt to use for generating the video. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `"(bad quality, worst quality:1.2), ugly faces, bad anime"`
   */
  negative_prompt?: string;
  /**
   * The number of frames to generate for the video. Default value: `16`
   */
  num_frames?: number;
  /**
   * The number of inference steps to perform. 4-12 is recommended for turbo mode. Default value: `4`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when looking for a related image to show you. Default value: `1`
   */
  guidance_scale?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Number of frames per second to extract from the video. Default value: `8`
   */
  fps?: number;
  /**
   * The motions to apply to the video.
   */
  motions?: Array<
    "zoom-out" | "zoom-in" | "pan-left" | "pan-right" | "tilt-up" | "tilt-down"
  >;
  /**
   * The size of the video to generate. Default value: `square`
   */
  video_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
};
export type AnimatediffV2vInput = {
  /**
   * URL of the video.
   */
  video_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `"(bad quality, worst quality:1.2), ugly faces, bad anime"`
   */
  negative_prompt?: string;
  /**
   * Increasing the amount of steps tells Stable Diffusion that it should take more steps
   * to generate your final result which can increase the amount of detail in your image. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7`
   */
  guidance_scale?: number;
  /**
   * Base model to use for animation generation. Default value: `"cardosAnimev20"`
   */
  base_model?: "darkSushiMixMix_colorful" | "cardosAnimev20";
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * Select every Nth frame from the video.
   * This can be used to reduce the number of frames to process, which can reduce the time and the cost.
   * However, it can also reduce the quality of the final video. Default value: `2`
   */
  select_every_nth_frame?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
};
export type AnimateDiffV2VInput = {
  /**
   * URL of the video.
   */
  video_url: string | Blob | File;
  /**
   * The first N number of seconds of video to animate. Default value: `3`
   */
  first_n_seconds?: number;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `"(bad quality, worst quality:1.2), ugly faces, bad anime"`
   */
  negative_prompt?: string;
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The strength of the input video in the final output. Default value: `0.7`
   */
  strength?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Number of frames per second to extract from the video. Default value: `8`
   */
  fps?: number;
  /**
   * The motions to apply to the video.
   */
  motions?: Array<
    "zoom-out" | "zoom-in" | "pan-left" | "pan-right" | "tilt-up" | "tilt-down"
  >;
};
export type AnimatediffV2vOutput = {
  /**
   * Generated video file.
   */
  video: File;
  /**
   * Seed used for generating the video.
   */
  seed: number;
  /**
   *
   */
  timings: any;
};
export type AnimateDiffV2VOutput = {
  /**
   * Generated video file.
   */
  video: File;
  /**
   * Seed used for generating the video.
   */
  seed: number;
};
export type AnimatediffV2vTurboInput = {
  /**
   * URL of the video.
   */
  video_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `"(bad quality, worst quality:1.2), ugly faces, bad anime"`
   */
  negative_prompt?: string;
  /**
   * Increasing the amount of steps tells Stable Diffusion that it should take more steps
   * to generate your final result which can increase the amount of detail in your image. Default value: `8`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `2.2`
   */
  guidance_scale?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Select every Nth frame from the video.
   * This can be used to reduce the number of frames to process, which can reduce the time and the cost.
   * However, it can also reduce the quality of the final video. Default value: `2`
   */
  select_every_nth_frame?: number;
};
export type AnimateDiffV2VTurboInput = {
  /**
   * URL of the video.
   */
  video_url: string | Blob | File;
  /**
   * The first N number of seconds of video to animate. Default value: `3`
   */
  first_n_seconds?: number;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `"(bad quality, worst quality:1.2), ugly faces, bad anime"`
   */
  negative_prompt?: string;
  /**
   * The number of inference steps to perform. 4-12 is recommended for turbo mode. Default value: `8`
   */
  num_inference_steps?: number;
  /**
   * The strength of the input video in the final output. Default value: `0.7`
   */
  strength?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when looking for a related image to show you. Default value: `1`
   */
  guidance_scale?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Number of frames per second to extract from the video. Default value: `8`
   */
  fps?: number;
  /**
   * The motions to apply to the video.
   */
  motions?: Array<
    "zoom-out" | "zoom-in" | "pan-left" | "pan-right" | "tilt-up" | "tilt-down"
  >;
};
export type AnimatediffV2vTurboOutput = {
  /**
   * Generated video file.
   */
  video: File;
  /**
   * Seed used for generating the video.
   */
  seed: number;
  /**
   *
   */
  timings: any;
};
export type AnimateDiffV2VTurboOutput = {
  /**
   * Generated video file.
   */
  video: File;
  /**
   * Seed used for generating the video.
   */
  seed: number;
  /**
   *
   */
  timings: any;
};
export type AnyLlmInput = {
  /**
   * Name of the model to use. Premium models are charged at 10x the rate of standard models, they include: openai/gpt-4o, anthropic/claude-3.5-sonnet, meta-llama/llama-3.2-90b-vision-instruct, google/gemini-pro-1.5, anthropic/claude-3-5-haiku. Default value: `"google/gemini-flash-1.5"`
   */
  model?:
    | "anthropic/claude-3.5-sonnet"
    | "anthropic/claude-3-5-haiku"
    | "anthropic/claude-3-haiku"
    | "google/gemini-pro-1.5"
    | "google/gemini-flash-1.5"
    | "google/gemini-flash-1.5-8b"
    | "meta-llama/llama-3.2-1b-instruct"
    | "meta-llama/llama-3.2-3b-instruct"
    | "meta-llama/llama-3.1-8b-instruct"
    | "meta-llama/llama-3.1-70b-instruct"
    | "openai/gpt-4o-mini"
    | "openai/gpt-4o"
    | "deepseek/deepseek-r1";
  /**
   * Prompt to be used for the chat completion
   */
  prompt: string;
  /**
   * System prompt to provide context or instructions to the model
   */
  system_prompt?: string;
};
export type AnyLlmOutput = {
  /**
   * Generated output
   */
  output: string;
  /**
   * Whether the output is partial
   */
  partial?: boolean;
  /**
   * Error message if an error occurred
   */
  error?: string;
};
export type AnyLlmVisionInput = {
  /**
   * Name of the model to use. Premium models are charged at 3x the rate of standard models, they include: openai/gpt-4o, anthropic/claude-3.5-sonnet, meta-llama/llama-3.2-90b-vision-instruct, google/gemini-pro-1.5, anthropic/claude-3-5-haiku. Default value: `"google/gemini-flash-1.5"`
   */
  model?:
    | "anthropic/claude-3.5-sonnet"
    | "anthropic/claude-3-haiku"
    | "google/gemini-pro-1.5"
    | "google/gemini-flash-1.5"
    | "google/gemini-flash-1.5-8b"
    | "openai/gpt-4o"
    | "meta-llama/llama-3.2-90b-vision-instruct";
  /**
   * Prompt to be used for the image
   */
  prompt: string;
  /**
   * System prompt to provide context or instructions to the model
   */
  system_prompt?: string;
  /**
   * URL of the image to be processed
   */
  image_url: string | Blob | File;
};
export type AnyLlmVisionOutput = {
  /**
   * Generated output
   */
  output: string;
  /**
   * Whether the output is partial
   */
  partial?: boolean;
  /**
   * Error message if an error occurred
   */
  error?: string;
};
export type AudioInput = {
  /**
   * The URL of the audio file.
   */
  audio_url: string | Blob | File;
};
export type AudioOutput = {
  /**
   * The generated audio.
   */
  audio: File;
};
export type AuraFlowInput = {
  /**
   * The prompt to generate images from
   */
  prompt: string;
  /**
   * The number of images to generate Default value: `1`
   */
  num_images?: number;
  /**
   * The seed to use for generating images
   */
  seed?: number;
  /**
   * Classifier free guidance scale Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * The number of inference steps to take Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * Whether to perform prompt expansion (recommended) Default value: `true`
   */
  expand_prompt?: boolean;
};
export type AuraFlowOutput = {
  /**
   * The generated images
   */
  images: Array<Image>;
  /**
   * The seed used to generate the images
   */
  seed: number;
  /**
   * The expanded prompt
   */
  prompt: string;
};
export type AuraSrInput = {
  /**
   * URL of the image to upscale.
   */
  image_url: string | Blob | File;
  /**
   * Upscaling factor. More coming soon. Default value: `"4"`
   */
  upscaling_factor?: "4";
  /**
   * Whether to use overlapping tiles for upscaling. Setting this to true helps remove seams but doubles the inference time.
   */
  overlapping_tiles?: boolean;
  /**
   * Checkpoint to use for upscaling. More coming soon. Default value: `"v1"`
   */
  checkpoint?: "v1" | "v2";
};
export type AuraSrOutput = {
  /**
   * Upscaled image
   */
  image: Image;
  /**
   * Timings for each step in the pipeline.
   */
  timings: any;
};
export type AutoCaptionInput = {
  /**
   * URL to the .mp4 video with audio. Only videos of size <100MB are allowed.
   */
  video_url: string | Blob | File;
  /**
   * Colour of the text. Can be a RGB tuple, a color name, or an hexadecimal notation. Default value: `"white"`
   */
  txt_color?: string;
  /**
   * Font for generated captions. Choose one in 'Arial','Standard','Garamond', 'Times New Roman','Georgia', or pass a url to a .ttf file Default value: `"Standard"`
   */
  txt_font?: string;
  /**
   * Size of text in generated captions. Default value: `24`
   */
  font_size?: number;
  /**
   * Width of the text strokes in pixels Default value: `1`
   */
  stroke_width?: number;
  /**
   * Left-to-right alignment of the text. Can be a string ('left', 'center', 'right') or a float (0.0-1.0) Default value: `center`
   */
  left_align?: string | number;
  /**
   * Top-to-bottom alignment of the text. Can be a string ('top', 'center', 'bottom') or a float (0.0-1.0) Default value: `center`
   */
  top_align?: string | number;
  /**
   * Number of seconds the captions should stay on screen. A higher number will also result in more text being displayed at once. Default value: `1.5`
   */
  refresh_interval?: number;
};
export type AutoCaptionOutput = {
  /**
   * URL to the caption .mp4 video.
   */
  video_url: string | Blob | File;
};
export type BaseInput = {
  /**
   * The prompt to generate the video from.
   */
  prompt: string;
  /**
   * The size of the generated video. Default value: `[object Object]`
   */
  video_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The negative prompt to generate video from Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The number of inference steps to perform. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same video every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related video to show you. Default value: `7`
   */
  guidance_scale?: number;
  /**
   * Use RIFE for video interpolation Default value: `true`
   */
  use_rife?: boolean;
  /**
   * The target FPS of the video Default value: `16`
   */
  export_fps?: number;
};
export type BatchMoonDreamOutput = {
  /**
   * URL to the generated captions JSON file containing filename-caption pairs.
   */
  captions_file: File;
  /**
   * List of generated captions
   */
  outputs: Array<string>;
};
export type BatchQueryInput = {
  /**
   * List of image URLs to be processed (maximum 32 images)
   */
  images_data_url: string | Blob | File;
  /**
   * Single prompt to apply to all images
   */
  prompt: string;
  /**
   * Maximum number of tokens to generate Default value: `64`
   */
  max_tokens?: number;
};
export type BGRemoveInput = {
  /**
   * Input Image to erase from
   */
  image_url: string | Blob | File;
};
export type BGRemoveOutput = {
  /**
   * The generated image
   */
  image: Image;
};
export type BGReplaceInput = {
  /**
   * Input Image to erase from
   */
  image_url: string | Blob | File;
  /**
   * The URL of the reference image to be used for generating the new background. Use "" to leave empty. Either ref_image_url or bg_prompt has to be provided but not both. If both ref_image_url and ref_image_file are provided, ref_image_url will be used. Accepted formats are jpeg, jpg, png, webp. Default value: `""`
   */
  ref_image_url?: string | Blob | File;
  /**
   * The prompt you would like to use to generate images.
   */
  prompt?: string;
  /**
   * The negative prompt you would like to use to generate images. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * Whether to refine prompt Default value: `true`
   */
  refine_prompt?: boolean;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Whether to use the fast model Default value: `true`
   */
  fast?: boolean;
  /**
   * Number of Images to generate. Default value: `1`
   */
  num_images?: number;
};
export type BGReplaceOutput = {
  /**
   * The generated images
   */
  images: Array<Image>;
  /**
   * Seed value used for generation.
   */
  seed: number;
};
export type BirefnetInput = {
  /**
   * URL of the image to remove background from
   */
  image_url: string | Blob | File;
  /**
   * Model to use for background removal.
   * The 'General Use (Light)' model is the original model used in the BiRefNet repository.
   * The 'General Use (Heavy)' model is a slower but more accurate model.
   * The 'Portrait' model is a model trained specifically for portrait images.
   * The 'General Use (Light)' model is recommended for most use cases.
   *
   * The corresponding models are as follows:
   * - 'General Use (Light)': BiRefNet-DIS_ep580.pth
   * - 'General Use (Heavy)': BiRefNet-massive-epoch_240.pth
   * - 'Portrait': BiRefNet-portrait-TR_P3M_10k-epoch_120.pth Default value: `"General Use (Light)"`
   */
  model?: "General Use (Light)" | "General Use (Heavy)" | "Portrait";
  /**
   * The resolution to operate on. The higher the resolution, the more accurate the output will be for high res input images. Default value: `"1024x1024"`
   */
  operating_resolution?: "1024x1024" | "2048x2048";
  /**
   * The format of the output image Default value: `"png"`
   */
  output_format?: "webp" | "png";
  /**
   * Whether to output the mask used to remove the background
   */
  output_mask?: boolean;
  /**
   * Whether to refine the foreground using the estimated mask Default value: `true`
   */
  refine_foreground?: boolean;
};
export type BirefnetOutput = {
  /**
   * Image with background removed
   */
  image: Image;
  /**
   * Mask used to remove the background
   */
  mask_image?: Image;
};
export type BirefnetV2Input = {
  /**
   * URL of the image to remove background from
   */
  image_url: string | Blob | File;
  /**
   * Model to use for background removal.
   * The 'General Use (Light)' model is the original model used in the BiRefNet repository.
   * The 'General Use (Light)' model is the original model used in the BiRefNet repository but trained with 2K images.
   * The 'General Use (Heavy)' model is a slower but more accurate model.
   * The 'Matting' model is a model trained specifically for matting images.
   * The 'Portrait' model is a model trained specifically for portrait images.
   * The 'General Use (Light)' model is recommended for most use cases.
   *
   * The corresponding models are as follows:
   * - 'General Use (Light)': BiRefNet-DIS_ep580.pth
   * - 'General Use (Heavy)': BiRefNet-massive-epoch_240.pth
   * - 'Portrait': BiRefNet-portrait-TR_P3M_10k-epoch_120.pth Default value: `"General Use (Light)"`
   */
  model?:
    | "General Use (Light)"
    | "General Use (Light 2K)"
    | "General Use (Heavy)"
    | "Matting"
    | "Portrait";
  /**
   * The resolution to operate on. The higher the resolution, the more accurate the output will be for high res input images. Default value: `"1024x1024"`
   */
  operating_resolution?: "1024x1024" | "2048x2048";
  /**
   * The format of the output image Default value: `"png"`
   */
  output_format?: "webp" | "png";
  /**
   * Whether to output the mask used to remove the background
   */
  output_mask?: boolean;
  /**
   * Whether to refine the foreground using the estimated mask Default value: `true`
   */
  refine_foreground?: boolean;
};
export type BirefnetV2Output = {
  /**
   * Image with background removed
   */
  image: Image;
  /**
   * Mask used to remove the background
   */
  mask_image?: Image;
};
export type BlurMaskInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * The radius of the Gaussian blur. Default value: `5`
   */
  radius?: number;
};
export type BlurMaskOutput = {
  /**
   * The mask
   */
  image: Image;
};
export type BriaBackgroundRemoveInput = {
  /**
   * Input Image to erase from
   */
  image_url: string | Blob | File;
};
export type BriaBackgroundRemoveOutput = {
  /**
   * The generated image
   */
  image: Image;
};
export type BriaBackgroundReplaceInput = {
  /**
   * Input Image to erase from
   */
  image_url: string | Blob | File;
  /**
   * The URL of the reference image to be used for generating the new background. Use "" to leave empty. Either ref_image_url or bg_prompt has to be provided but not both. If both ref_image_url and ref_image_file are provided, ref_image_url will be used. Accepted formats are jpeg, jpg, png, webp. Default value: `""`
   */
  ref_image_url?: string | Blob | File;
  /**
   * The prompt you would like to use to generate images.
   */
  prompt?: string;
  /**
   * The negative prompt you would like to use to generate images. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * Whether to refine prompt Default value: `true`
   */
  refine_prompt?: boolean;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Whether to use the fast model Default value: `true`
   */
  fast?: boolean;
  /**
   * Number of Images to generate. Default value: `1`
   */
  num_images?: number;
};
export type BriaBackgroundReplaceOutput = {
  /**
   * The generated images
   */
  images: Array<Image>;
  /**
   * Seed value used for generation.
   */
  seed: number;
};
export type BriaEraserInput = {
  /**
   * Input Image to erase from
   */
  image_url: string | Blob | File;
  /**
   * The URL of the binary mask image that represents the area that will be cleaned.
   */
  mask_url: string | Blob | File;
  /**
   * You can use this parameter to specify the type of the input mask from the list. 'manual' opttion should be used in cases in which the mask had been generated by a user (e.g. with a brush tool), and 'automatic' mask type should be used when mask had been generated by an algorithm like 'SAM'. Default value: `"manual"`
   */
  mask_type?: "manual" | "automatic";
};
export type BriaEraserOutput = {
  /**
   * The generated image
   */
  image: Image;
};
export type BriaExpandInput = {
  /**
   * The URL of the input image.
   */
  image_url: string | Blob | File;
  /**
   * The desired size of the final image, after the expansion. should have an area of less than 5000x5000 pixels.
   */
  canvas_size: Array<number>;
  /**
   * The desired size of the original image, inside the full canvas. Ensure that the ratio of input image foreground or main subject to the canvas area is greater than 15% to achieve optimal results.
   */
  original_image_size: Array<number>;
  /**
   * The desired location of the original image, inside the full canvas. Provide the location of the upper left corner of the original image. The location can also be outside the canvas (the original image will be cropped).
   */
  original_image_location: Array<number>;
  /**
   * Text on which you wish to base the image expansion. This parameter is optional. Bria currently supports prompts in English only, excluding special characters. Default value: `""`
   */
  prompt?: string;
  /**
   * You can choose whether you want your generated expension to be random or predictable. You can recreate the same result in the future by using the seed value of a result from the response. You can exclude this parameter if you are not interested in recreating your results. This parameter is optional.
   */
  seed?: number;
  /**
   * The negative prompt you would like to use to generate images. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * Number of Images to generate. Default value: `1`
   */
  num_images?: number;
};
export type BriaExpandOutput = {
  /**
   * The generated image
   */
  image: Image;
  /**
   * Seed value used for generation.
   */
  seed: number;
};
export type BriaGenfillInput = {
  /**
   * Input Image to erase from
   */
  image_url: string | Blob | File;
  /**
   * The URL of the binary mask image that represents the area that will be cleaned.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt you would like to use to generate images.
   */
  prompt: string;
  /**
   * The negative prompt you would like to use to generate images. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Number of Images to generate. Default value: `1`
   */
  num_images?: number;
};
export type BriaGenfillOutput = {
  /**
   * Generated Images
   */
  images: Array<Image>;
};
export type BriaProductShotInput = {
  /**
   * The URL of the product shot to be placed in a lifestyle shot. If both image_url and image_file are provided, image_url will be used. Accepted formats are jpeg, jpg, png, webp. Maximum file size 12MB.
   */
  image_url: string | Blob | File;
  /**
   * Text description of the new scene or background for the provided product shot. Bria currently supports prompts in English only, excluding special characters.
   */
  scene_description?: string;
  /**
   * The URL of the reference image to be used for generating the new scene or background for the product shot. Use "" to leave empty.Either ref_image_url or scene_description has to be provided but not both. If both ref_image_url and ref_image_file are provided, ref_image_url will be used. Accepted formats are jpeg, jpg, png, webp. Default value: `""`
   */
  ref_image_url?: string | Blob | File;
  /**
   * Whether to optimize the scene description Default value: `true`
   */
  optimize_description?: boolean;
  /**
   * The number of lifestyle product shots you would like to generate. You will get num_results x 10 results when placement_type=automatic and according to the number of required placements x num_results if placement_type=manual_placement. Default value: `1`
   */
  num_results?: number;
  /**
   * Whether to use the fast model Default value: `true`
   */
  fast?: boolean;
  /**
   * This parameter allows you to control the positioning of the product in the image. Choosing 'original' will preserve the original position of the product in the image. Choosing 'automatic' will generate results with the 10 recommended positions for the product. Choosing 'manual_placement' will allow you to select predefined positions (using the parameter 'manual_placement_selection'). Selecting 'manual_padding' will allow you to control the position and size of the image by defining the desired padding in pixels around the product. Default value: `"manual_placement"`
   */
  placement_type?:
    | "original"
    | "automatic"
    | "manual_placement"
    | "manual_padding";
  /**
   * This flag is only relevant when placement_type=original. If true, the output image retains the original input image's size; otherwise, the image is scaled to 1 megapixel (1MP) while preserving its aspect ratio.
   */
  original_quality?: boolean;
  /**
   * The desired size of the final product shot. For optimal results, the total number of pixels should be around 1,000,000. This parameter is only relevant when placement_type=automatic or placement_type=manual_placement. Default value: `1000,1000`
   */
  shot_size?: Array<number>;
  /**
   * If you've selected placement_type=manual_placement, you should use this parameter to specify which placements/positions you would like to use from the list. You can select more than one placement in one request. Default value: `"bottom_center"`
   */
  manual_placement_selection?:
    | "upper_left"
    | "upper_right"
    | "bottom_left"
    | "bottom_right"
    | "right_center"
    | "left_center"
    | "upper_center"
    | "bottom_center"
    | "center_vertical"
    | "center_horizontal";
  /**
   * The desired padding in pixels around the product, when using placement_type=manual_padding. The order of the values is [left, right, top, bottom]. For optimal results, the total number of pixels, including padding, should be around 1,000,000. It is recommended to first use the product cutout API, get the cutout and understand the size of the result, and then define the required padding and use the cutout as an input for this API.
   */
  padding_values?: Array<number>;
};
export type BriaProductShotOutput = {
  /**
   * The generated images
   */
  images: Array<Image>;
};
export type BriaTextToImageBaseInput = {
  /**
   * The prompt you would like to use to generate images.
   */
  prompt: string;
  /**
   * The negative prompt you would like to use to generate images. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * How many images you would like to generate. When using any Guidance Method, Value is set to 1. Default value: `4`
   */
  num_images?: number;
  /**
   * The aspect ratio of the image. When a guidance method is being used, the aspect ratio is defined by the guidance image and this parameter is ignored. Default value: `"1:1"`
   */
  aspect_ratio?:
    | "1:1"
    | "2:3"
    | "3:2"
    | "3:4"
    | "4:3"
    | "4:5"
    | "5:4"
    | "9:16"
    | "16:9";
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of iterations the model goes through to refine the generated image. This parameter is optional. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * When set to true, enhances the provided prompt by generating additional, more descriptive variations, resulting in more diverse and creative output images.
   */
  prompt_enhancement?: boolean;
  /**
   * Which medium should be included in your generated images. This parameter is optional.
   */
  medium?: "photography" | "art";
  /**
   * Guidance images to use for the generation. Up to 4 guidance methods can be combined during a single inference. Default value: ``
   */
  guidance?: Array<GuidanceInput>;
};
export type BriaTextToImageBaseOutput = {
  /**
   * The generated images
   */
  images: Array<Image>;
  /**
   * Seed value used for generation.
   */
  seed: number;
};
export type BriaTextToImageFastInput = {
  /**
   * The prompt you would like to use to generate images.
   */
  prompt: string;
  /**
   * The negative prompt you would like to use to generate images. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * How many images you would like to generate. When using any Guidance Method, Value is set to 1. Default value: `4`
   */
  num_images?: number;
  /**
   * The aspect ratio of the image. When a guidance method is being used, the aspect ratio is defined by the guidance image and this parameter is ignored. Default value: `"1:1"`
   */
  aspect_ratio?:
    | "1:1"
    | "2:3"
    | "3:2"
    | "3:4"
    | "4:3"
    | "4:5"
    | "5:4"
    | "9:16"
    | "16:9";
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of iterations the model goes through to refine the generated image. This parameter is optional. Default value: `8`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * When set to true, enhances the provided prompt by generating additional, more descriptive variations, resulting in more diverse and creative output images.
   */
  prompt_enhancement?: boolean;
  /**
   * Which medium should be included in your generated images. This parameter is optional.
   */
  medium?: "photography" | "art";
  /**
   * Guidance images to use for the generation. Up to 4 guidance methods can be combined during a single inference. Default value: ``
   */
  guidance?: Array<GuidanceInput>;
};
export type BriaTextToImageFastOutput = {
  /**
   * The generated images
   */
  images: Array<Image>;
  /**
   * Seed value used for generation.
   */
  seed: number;
};
export type BriaTextToImageHdInput = {
  /**
   * The prompt you would like to use to generate images.
   */
  prompt: string;
  /**
   * The negative prompt you would like to use to generate images. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * How many images you would like to generate. When using any Guidance Method, Value is set to 1. Default value: `4`
   */
  num_images?: number;
  /**
   * The aspect ratio of the image. When a guidance method is being used, the aspect ratio is defined by the guidance image and this parameter is ignored. Default value: `"1:1"`
   */
  aspect_ratio?:
    | "1:1"
    | "2:3"
    | "3:2"
    | "3:4"
    | "4:3"
    | "4:5"
    | "5:4"
    | "9:16"
    | "16:9";
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of iterations the model goes through to refine the generated image. This parameter is optional. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * When set to true, enhances the provided prompt by generating additional, more descriptive variations, resulting in more diverse and creative output images.
   */
  prompt_enhancement?: boolean;
  /**
   * Which medium should be included in your generated images. This parameter is optional.
   */
  medium?: "photography" | "art";
  /**
   * Guidance images to use for the generation. Up to 4 guidance methods can be combined during a single inference. Default value: ``
   */
  guidance?: Array<GuidanceInput>;
};
export type BriaTextToImageHdOutput = {
  /**
   * The generated images
   */
  images: Array<Image>;
  /**
   * Seed value used for generation.
   */
  seed: number;
};
export type CannyInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
  /**
   * Low threshold for the hysteresis procedure. Edges with a strength higher than the low threshold will appear in the output image, if there are strong edges nearby. Default value: `100`
   */
  low_threshold?: number;
  /**
   * High threshold for the hysteresis procedure. Edges with a strength higher than the high threshold will always appear as edges in the output image. Default value: `200`
   */
  high_threshold?: number;
};
export type CannyOutput = {
  /**
   * Image with edges detected using the Canny algorithm
   */
  image: Image;
};
export type CatVtonInput = {
  /**
   * Url for the human image.
   */
  human_image_url: string | Blob | File;
  /**
   * Url to the garment image.
   */
  garment_image_url: string | Blob | File;
  /**
   * Type of the Cloth to be tried on.
   *
   * Options:
   * upper: Upper body cloth
   * lower: Lower body cloth
   * overall: Full body cloth
   * inner: Inner cloth, like T-shirt inside a jacket
   * outer: Outer cloth, like a jacket over a T-shirt
   */
  cloth_type: "upper" | "lower" | "overall" | "inner" | "outer";
  /**
   * The size of the generated image. Default value: `portrait_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `2.5`
   */
  guidance_scale?: number;
  /**
   * The same seed and the same input given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
};
export type CatVtonOutput = {
  /**
   * The output image.
   */
  image: Image;
};
export type CcsrInput = {
  /**
   * The text prompt you would like to convert to speech.
   */
  image_url: string | Blob | File;
  /**
   * The scale of the output image. The higher the scale, the bigger the output image will be. Default value: `2`
   */
  scale?: number;
  /**
   * If specified, a patch-based sampling strategy will be used for sampling. Default value: `"none"`
   */
  tile_diffusion?: "none" | "mix" | "gaussian";
  /**
   * Size of patch. Default value: `1024`
   */
  tile_diffusion_size?: number;
  /**
   * Stride of sliding patch. Default value: `512`
   */
  tile_diffusion_stride?: number;
  /**
   * If specified, a patch-based sampling strategy will be used for VAE decoding.
   */
  tile_vae?: boolean;
  /**
   * Size of VAE patch. Default value: `226`
   */
  tile_vae_decoder_size?: number;
  /**
   * Size of latent image Default value: `1024`
   */
  tile_vae_encoder_size?: number;
  /**
   * The number of steps to run the model for. The higher the number the better the quality and longer it will take to generate. Default value: `50`
   */
  steps?: number;
  /**
   * The ending point of uniform sampling strategy. Default value: `0.6667`
   */
  t_max?: number;
  /**
   * The starting point of uniform sampling strategy. Default value: `0.3333`
   */
  t_min?: number;
  /**
   * Type of color correction for samples. Default value: `"adain"`
   */
  color_fix_type?: "none" | "wavelet" | "adain";
  /**
   * Seed for reproducibility. Different seeds will make slightly different results.
   */
  seed?: number;
};
export type CcsrOutput = {
  /**
   * The generated image file info.
   */
  image: Image;
  /**
   * The seed used for the generation.
   */
  seed: number;
};
export type ChatInput = {
  /**
   * Name of the model to use. Premium models are charged at 10x the rate of standard models, they include: openai/gpt-4o, anthropic/claude-3.5-sonnet, meta-llama/llama-3.2-90b-vision-instruct, google/gemini-pro-1.5, anthropic/claude-3-5-haiku. Default value: `"google/gemini-flash-1.5"`
   */
  model?:
    | "anthropic/claude-3.5-sonnet"
    | "anthropic/claude-3-5-haiku"
    | "anthropic/claude-3-haiku"
    | "google/gemini-pro-1.5"
    | "google/gemini-flash-1.5"
    | "google/gemini-flash-1.5-8b"
    | "meta-llama/llama-3.2-1b-instruct"
    | "meta-llama/llama-3.2-3b-instruct"
    | "meta-llama/llama-3.1-8b-instruct"
    | "meta-llama/llama-3.1-70b-instruct"
    | "openai/gpt-4o-mini"
    | "openai/gpt-4o"
    | "deepseek/deepseek-r1";
  /**
   * Prompt to be used for the chat completion
   */
  prompt: string;
  /**
   * System prompt to provide context or instructions to the model
   */
  system_prompt?: string;
};
export type ClarityUpscalerInput = {
  /**
   * The URL of the image to upscale.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results. Default value: `"masterpiece, best quality, highres"`
   */
  prompt?: string;
  /**
   * The upscale factor Default value: `2`
   */
  upscale_factor?: number;
  /**
   * The negative prompt to use. Use it to address details that you don't want in the image. Default value: `"(worst quality, low quality, normal quality:2)"`
   */
  negative_prompt?: string;
  /**
   * The creativity of the model. The higher the creativity, the more the model will deviate from the prompt.
   * Refers to the denoise strength of the sampling. Default value: `0.35`
   */
  creativity?: number;
  /**
   * The resemblance of the upscaled image to the original image. The higher the resemblance, the more the model will try to keep the original image.
   * Refers to the strength of the ControlNet. Default value: `0.6`
   */
  resemblance?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `4`
   */
  guidance_scale?: number;
  /**
   * The number of inference steps to perform. Default value: `18`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number | null;
  /**
   * If set to false, the safety checker will be disabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type ClarityUpscalerOutput = {
  /**
   * The URL of the generated image.
   */
  image: Image;
  /**
   * The seed used to generate the image.
   */
  seed: number;
  /**
   * The timings of the different steps in the workflow.
   */
  timings: any;
};
export type Cogvideox5bImageToVideoInput = {
  /**
   * The prompt to generate the video from.
   */
  prompt: string;
  /**
   * The size of the generated video. Default value: `[object Object]`
   */
  video_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The negative prompt to generate video from Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The number of inference steps to perform. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same video every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related video to show you. Default value: `7`
   */
  guidance_scale?: number;
  /**
   * Use RIFE for video interpolation Default value: `true`
   */
  use_rife?: boolean;
  /**
   * The target FPS of the video Default value: `16`
   */
  export_fps?: number;
  /**
   * The URL to the image to generate the video from.
   */
  image_url: string | Blob | File;
};
export type Cogvideox5bImageToVideoOutput = {
  /**
   * The URL to the generated video
   */
  video: File;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated video. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * The prompt used for generating the video.
   */
  prompt: string;
};
export type Cogvideox5bInput = {
  /**
   * The prompt to generate the video from.
   */
  prompt: string;
  /**
   * The size of the generated video. Default value: `[object Object]`
   */
  video_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The negative prompt to generate video from Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The number of inference steps to perform. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same video every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related video to show you. Default value: `7`
   */
  guidance_scale?: number;
  /**
   * Use RIFE for video interpolation Default value: `true`
   */
  use_rife?: boolean;
  /**
   * The target FPS of the video Default value: `16`
   */
  export_fps?: number;
};
export type Cogvideox5bOutput = {
  /**
   * The URL to the generated video
   */
  video: File;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated video. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * The prompt used for generating the video.
   */
  prompt: string;
};
export type Cogvideox5bVideoToVideoInput = {
  /**
   * The prompt to generate the video from.
   */
  prompt: string;
  /**
   * The size of the generated video. Default value: `[object Object]`
   */
  video_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The negative prompt to generate video from Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The number of inference steps to perform. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same video every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related video to show you. Default value: `7`
   */
  guidance_scale?: number;
  /**
   * Use RIFE for video interpolation Default value: `true`
   */
  use_rife?: boolean;
  /**
   * The target FPS of the video Default value: `16`
   */
  export_fps?: number;
  /**
   * The video to generate the video from.
   */
  video_url: string | Blob | File;
  /**
   * The strength to use for Video to Video.  1.0 completely remakes the video while 0.0 preserves the original. Default value: `0.8`
   */
  strength?: number;
};
export type Cogvideox5bVideoToVideoOutput = {
  /**
   * The URL to the generated video
   */
  video: File;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated video. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * The prompt used for generating the video.
   */
  prompt: string;
};
export type ComfyInput = {
  /**
   *
   */
  prompt: any;
  /**
   *
   */
  extra_data?: any;
  /**
   * Disable saving prompt metadata in files.
   */
  disable_metadata?: boolean;
};
export type CompareTextInput = {
  /**
   * Input text
   */
  text: string;
  /**
   * Text to compare against
   */
  compare_text: string;
  /**
   * Text to return if the input text matches the compare text
   */
  return_text: string;
  /**
   * Text to return if the input text does not match the compare text
   */
  fail_text: string;
};
export type CompositeImageInput = {
  /**
   * Input image url.
   */
  background_image_url: string | Blob | File;
  /**
   * Overlay image url.
   */
  overlay_image_url: string | Blob | File;
  /**
   * Optional mask image url.
   */
  mask_image_url?: string | Blob | File;
};
export type ControlnetsdxlInput = {
  /**
   * Url to input image
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The scale of the ControlNet. Default value: `0.5`
   */
  controlnet_conditioning_scale?: number;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * Increasing the amount of steps tells Stable Diffusion that it should take more steps
   * to generate your final result which can increase the amount of detail in your image. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
};
export type ControlnetsdxlOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
};
export type ControlNetUnionInput = {
  /**
   * URL of the image to be used as the control image.
   */
  control_image_url: string | Blob | File;
  /**
   * URL of the mask for the control image.
   */
  mask_image_url?: string | Blob | File;
  /**
   * Control Mode for Flux Controlnet Union. Supported values are:
   * - canny: Uses the edges for guided generation.
   * - tile: Uses the tiles for guided generation.
   * - depth: Utilizes a grayscale depth map for guided generation.
   * - blur: Adds a blur to the image.
   * - pose: Uses the pose of the image for guided generation.
   * - gray: Converts the image to grayscale.
   * - low-quality: Converts the image to a low-quality image.
   */
  control_mode:
    | "canny"
    | "tile"
    | "depth"
    | "blur"
    | "pose"
    | "gray"
    | "low-quality";
  /**
   * The scale of the control net weight. This is used to scale the control net weight
   * before merging it with the base model. Default value: `1`
   */
  conditioning_scale?: number;
  /**
   * Threshold for mask. Default value: `0.5`
   */
  mask_threshold?: number;
  /**
   * The percentage of the image to start applying the controlnet in terms of the total timesteps.
   */
  start_percentage?: number;
  /**
   * The percentage of the image to end applying the controlnet in terms of the total timesteps. Default value: `1`
   */
  end_percentage?: number;
};
export type ControlnextInput = {
  /**
   * URL of the reference image.
   */
  image_url: string | Blob | File;
  /**
   * URL of the input video.
   */
  video_url: string | Blob | File;
  /**
   * Height of the output video. Default value: `1024`
   */
  height?: number;
  /**
   * Width of the output video. Default value: `576`
   */
  width?: number;
  /**
   * Guidance scale for the diffusion process. Default value: `3`
   */
  guidance_scale?: number;
  /**
   * Number of inference steps. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * Maximum number of frames to process. Default value: `240`
   */
  max_frame_num?: number;
  /**
   * Number of frames to process in each batch. Default value: `24`
   */
  batch_frames?: number;
  /**
   * Number of overlapping frames between batches. Default value: `6`
   */
  overlap?: number;
  /**
   * Stride for sampling frames from the input video. Default value: `2`
   */
  sample_stride?: number;
  /**
   * Chunk size for decoding frames. Default value: `2`
   */
  decode_chunk_size?: number;
  /**
   * Motion bucket ID for the pipeline. Default value: `127`
   */
  motion_bucket_id?: number;
  /**
   * Frames per second for the output video. Default value: `7`
   */
  fps?: number;
  /**
   * Condition scale for ControlNeXt. Default value: `1`
   */
  controlnext_cond_scale?: number;
};
export type ControlnextOutput = {
  /**
   * The generated video.
   */
  video: File;
};
export type CreativeUpscalerInput = {
  /**
   * The type of model to use for the upscaling. Default is SD_1_5 Default value: `"SD_1_5"`
   */
  model_type?: "SD_1_5" | "SDXL";
  /**
   * The image to upscale.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results. If no prompt is provide BLIP2 will be used to generate a prompt.
   */
  prompt?: string;
  /**
   * The scale of the output image. The higher the scale, the bigger the output image will be. Default value: `2`
   */
  scale?: number;
  /**
   * How much the output can deviate from the original Default value: `0.5`
   */
  creativity?: number;
  /**
   * How much detail to add Default value: `1`
   */
  detail?: number;
  /**
   * How much to preserve the shape of the original image Default value: `0.25`
   */
  shape_preservation?: number;
  /**
   * The suffix to add to the prompt. This is useful to add a common ending to all prompts such as 'high quality' etc or embedding tokens. Default value: `" high quality, highly detailed, high resolution, sharp"`
   */
  prompt_suffix?: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `"blurry, low resolution, bad, ugly, low quality, pixelated, interpolated, compression artifacts, noisey, grainy"`
   */
  negative_prompt?: string;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * The number of inference steps to use for generating the image. The more steps
   * the better the image will be but it will also take longer to generate. Default value: `20`
   */
  num_inference_steps?: number;
  /**
   * If set to true, the resulting image will be checked whether it includes any
   * potentially unsafe content. If it does, it will be replaced with a black
   * image. Default value: `true`
   */
  enable_safety_checks?: boolean;
  /**
   * If set to true, the image will not be processed by the CCSR model before
   * being processed by the creativity model.
   */
  skip_ccsr?: boolean;
  /**
   * Allow for large uploads that could take a very long time.
   */
  override_size_limits?: boolean;
  /**
   * The URL to the base model to use for the upscaling
   */
  base_model_url?: string | Blob | File;
  /**
   * The URL to the additional LORA model to use for the upscaling. Default is None
   */
  additional_lora_url?: string | Blob | File;
  /**
   * The scale of the additional LORA model to use for the upscaling. Default is 1.0 Default value: `1`
   */
  additional_lora_scale?: number;
  /**
   * The URL to the additional embeddings to use for the upscaling. Default is None
   */
  additional_embedding_url?: string | Blob | File;
};
export type CreativeUpscalerOutput = {
  /**
   * The generated image file info.
   */
  image: Image;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
};
export type DepthAnythingV2Input = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
};
export type DepthAnythingV2Output = {
  /**
   * Image with depth map
   */
  image: Image;
};
export type DepthMapInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * a Default value: `6.283185307179586`
   */
  a?: number;
  /**
   * bg_th Default value: `0.1`
   */
  bg_th?: number;
  /**
   * depth_and_normal
   */
  depth_and_normal?: boolean;
};
export type DepthMapOutput = {
  /**
   * The depth map.
   */
  image: Image;
};
export type DetectionInput = {
  /**
   * Image URL to be processed
   */
  image_url: string | Blob | File;
  /**
   * Type of detection to perform
   */
  task_type: "bbox_detection" | "point_detection" | "gaze_detection";
  /**
   * Text description of what to detect
   */
  detection_prompt: string;
  /**
   * Whether to use ensemble for gaze detection
   */
  use_ensemble?: boolean;
};
export type DetectionOutput = {
  /**
   * Output image with detection visualization
   */
  image: Image;
  /**
   * Detection results as text
   */
  text_output: string;
};
export type DevImageToImageInput = {
  /**
   * The URL of the image to generate an image from.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The strength of the initial image. Higher strength values are better for this model. Default value: `0.95`
   */
  strength?: number;
  /**
   * The number of inference steps to perform. Default value: `40`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type DevReduxInput = {
  /**
   * The URL of the image to generate an image from.
   */
  image_url: string | Blob | File;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type DevTextToImageInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type DifferentialDiffusionInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The LoRAs to use for the image generation which use a control image. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  control_loras?: Array<ControlLoraWeight>;
  /**
   * The controlnets to use for the image generation. Only one controlnet is supported at the moment. Default value: ``
   */
  controlnets?: Array<ControlNet>;
  /**
   * The controlnet unions to use for the image generation. Only one controlnet is supported at the moment. Default value: ``
   */
  controlnet_unions?: Array<ControlNetUnion>;
  /**
   * IP-Adapter to use for image generation. Default value: ``
   */
  ip_adapters?: Array<IPAdapter>;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  real_cfg_scale?: number;
  /**
   * Uses classical CFG as in SD1.5, SDXL, etc. Increases generation times and price when set to be true.
   * If using XLabs IP-Adapter v1, this will be turned on!.
   */
  use_real_cfg?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * URL of Image for Reference-Only
   */
  reference_image_url?: string | Blob | File;
  /**
   * Strength of reference_only generation. Only used if a reference image is provided. Default value: `0.65`
   */
  reference_strength?: number;
  /**
   * The percentage of the total timesteps when the reference guidance is to bestarted.
   */
  reference_start?: number;
  /**
   * The percentage of the total timesteps when the reference guidance is to be ended. Default value: `1`
   */
  reference_end?: number;
  /**
   * Base shift for the scheduled timesteps Default value: `0.5`
   */
  base_shift?: number;
  /**
   * Max shift for the scheduled timesteps Default value: `1.15`
   */
  max_shift?: number;
  /**
   * URL of image to use as initial image.
   */
  image_url: string | Blob | File;
  /**
   * URL of change map.
   */
  change_map_image_url: string | Blob | File;
  /**
   * The strength to use for differential diffusion. 1.0 is completely remakes the image while 0.0 preserves the original. Default value: `0.85`
   */
  strength?: number;
};
export type DiffusionEdgeInput = {
  /**
   * The text prompt you would like to convert to speech.
   */
  image_url: string | Blob | File;
};
export type DiffusionEdgeOutput = {
  /**
   * The generated image file info.
   */
  image: Image;
};
export type DreamshaperImageToImageInput = {
  /**
   * The Dreamshaper model to use.
   */
  model_name?:
    | "Lykon/dreamshaper-xl-1-0"
    | "Lykon/dreamshaper-xl-v2-turbo"
    | "Lykon/dreamshaper-8";
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   *  Default value: `[object Object]`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
};
export type DreamshaperInpaintingInput = {
  /**
   * The Dreamshaper model to use.
   */
  model_name?:
    | "Lykon/dreamshaper-xl-1-0"
    | "Lykon/dreamshaper-xl-v2-turbo"
    | "Lykon/dreamshaper-8";
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   *  Default value: `[object Object]`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
};
export type DreamshaperInput = {
  /**
   * The Dreamshaper model to use.
   */
  model_name?:
    | "Lykon/dreamshaper-xl-1-0"
    | "Lykon/dreamshaper-xl-v2-turbo"
    | "Lykon/dreamshaper-8";
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want in the image. Default value: `"(worst quality, low quality, normal quality, lowres, low details, oversaturated, undersaturated, overexposed, underexposed, grayscale, bw, bad photo, bad photography, bad art:1.4), (watermark, signature, text font, username, error, logo, words, letters, digits, autograph, trademark, name:1.2), (blur, blurry, grainy), morbid, ugly, asymmetrical, mutated malformed, mutilated, poorly lit, bad shadow, draft, cropped, out of frame, cut off, censored, jpeg artifacts, out of focus, glitch, duplicate, (airbrushed, cartoon, anime, semi-realistic, cgi, render, blender, digital art, manga, amateur:1.3), (3D ,3D Game, 3D Game Scene, 3D Character:1.1), (bad hands, bad anatomy, bad body, bad face, bad teeth, bad arms, bad legs, deformities:1.3)"`
   */
  negative_prompt?: string;
  /**
   *  Default value: `[object Object]`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `35`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when looking for a related image to show you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
};
export type DreamshaperOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type DubbingInput = {
  /**
   * Input video URL to be dubbed.
   */
  video_url: string | Blob | File;
  /**
   * Target language to dub the video to Default value: `"hindi"`
   */
  target_language?: "hindi" | "turkish" | "english";
  /**
   * Whether to lip sync the audio to the video Default value: `true`
   */
  do_lipsync?: boolean;
};
export type DubbingOutput = {
  /**
   * The generated video with the lip sync.
   */
  video: File;
};
export type DwposeInput = {
  /**
   * URL of the image to be processed
   */
  image_url: string | Blob | File;
};
export type DwposeOutput = {
  /**
   * The predicted pose image
   */
  image: Image;
};
export type EditImageInput = {
  /**
   * The prompt to fill the masked part of the image.
   */
  prompt: string;
  /**
   * The image URL to generate an image from. Needs to match the dimensions of the mask.
   */
  image_url: string | Blob | File;
  /**
   * The mask URL to inpaint the image. Needs to match the dimensions of the input image.
   */
  mask_url: string | Blob | File;
  /**
   * Seed for the random number generator
   */
  seed?: number;
  /**
   * The style of the generated image Default value: `"auto"`
   */
  style?: "auto" | "general" | "realistic" | "design" | "render_3D" | "anime";
  /**
   * Whether to expand the prompt with MagicPrompt functionality. Default value: `true`
   */
  expand_prompt?: boolean;
};
export type Era3dInput = {
  /**
   * URL of the image to remove background from
   */
  image_url: string | Blob | File;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when looking for a related image to show you. Default value: `4`
   */
  cfg?: number;
  /**
   * Number of steps to run the model for Default value: `40`
   */
  steps?: number;
  /**
   * Size of the image to crop to Default value: `400`
   */
  crop_size?: number;
  /**
   * Seed for random number generation Default value: `-1`
   */
  seed?: number;
  /**
   * Background removal Default value: `true`
   */
  background_removal?: boolean;
};
export type Era3dOutput = {
  /**
   * Images with background removed
   */
  images: Array<Image>;
  /**
   * Normal images with background removed
   */
  normal_images: Array<Image>;
  /**
   * Seed used for random number generation
   */
  seed: number;
};
export type EraserInput = {
  /**
   * Input Image to erase from
   */
  image_url: string | Blob | File;
  /**
   * The URL of the binary mask image that represents the area that will be cleaned.
   */
  mask_url: string | Blob | File;
  /**
   * You can use this parameter to specify the type of the input mask from the list. 'manual' opttion should be used in cases in which the mask had been generated by a user (e.g. with a brush tool), and 'automatic' mask type should be used when mask had been generated by an algorithm like 'SAM'. Default value: `"manual"`
   */
  mask_type?: "manual" | "automatic";
};
export type EraserOutput = {
  /**
   * The generated image
   */
  image: Image;
};
export type EsrganInput = {
  /**
   * Url to input image
   */
  image_url: string | Blob | File;
  /**
   * Rescaling factor Default value: `2`
   */
  scale?: number;
  /**
   * Tile size. Default is 0, that is no tile. When encountering the out-of-GPU-memory issue, please specify it, e.g., 400 or 200
   */
  tile?: number;
  /**
   * Upscaling a face
   */
  face?: boolean;
  /**
   * Model to use for upscaling Default value: `"RealESRGAN_x4plus"`
   */
  model?:
    | "RealESRGAN_x4plus"
    | "RealESRGAN_x2plus"
    | "RealESRGAN_x4plus_anime_6B"
    | "RealESRGAN_x4_v3"
    | "RealESRGAN_x4_wdn_v3"
    | "RealESRGAN_x4_anime_v3";
  /**
   * Output image format (png or jpeg) Default value: `"png"`
   */
  output_format?: "png" | "jpeg";
};
export type EsrganOutput = {
  /**
   * Upscaled image
   */
  image: Image;
};
export type F5TtsInput = {
  /**
   * The text to be converted to speech.
   */
  gen_text: string;
  /**
   * The URL of the reference audio file.
   */
  ref_audio_url: string | Blob | File;
  /**
   * The reference text to be used for TTS. If not provided, an ASR (Automatic Speech Recognition) model will be used to generate the reference text. Default value: `""`
   */
  ref_text?: string;
  /**
   * The name of the model to be used for TTS.
   */
  model_type: "F5-TTS" | "E2-TTS";
  /**
   * Whether to remove the silence from the audio file. Default value: `true`
   */
  remove_silence?: boolean;
};
export type F5TtsOutput = {
  /**
   * The audio file containing the generated speech.
   */
  audio_url: AudioFile;
};
export type FaceToStickerInput = {
  /**
   * URL of the video.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * Increasing the amount of steps tells Stable Diffusion that it should take more steps
   * to generate your final result which can increase the amount of detail in your image. Default value: `20`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `4.5`
   */
  guidance_scale?: number;
  /**
   * The strength of the instant ID. Default value: `0.7`
   */
  instant_id_strength?: number;
  /**
   * The weight of the IP adapter. Default value: `0.2`
   */
  ip_adapter_weight?: number;
  /**
   * The amount of noise to add to the IP adapter. Default value: `0.5`
   */
  ip_adapter_noise?: number;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * Whether to upscale the image 2x.
   */
  upscale?: boolean;
  /**
   * The number of steps to use for upscaling. Only used if `upscale` is `true`. Default value: `10`
   */
  upscale_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to false, the safety checker will be disabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type FaceToStickerOutput = {
  /**
   * The generated images.
   */
  images: Array<Image>;
  /**
   * The generated face sticker image.
   */
  sticker_image: Image;
  /**
   * The generated face sticker image with the background removed.
   */
  sticker_image_background_removed: Image;
  /**
   * Seed used during the inference.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   * The key is the image type and the value is a boolean.
   */
  has_nsfw_concepts: any;
};
export type FastAnimatediffTextToVideoInput = {
  /**
   * The prompt to use for generating the video. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `"(bad quality, worst quality:1.2), ugly faces, bad anime"`
   */
  negative_prompt?: string;
  /**
   * The number of frames to generate for the video. Default value: `16`
   */
  num_frames?: number;
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Number of frames per second to extract from the video. Default value: `8`
   */
  fps?: number;
  /**
   * The motions to apply to the video.
   */
  motions?: Array<
    "zoom-out" | "zoom-in" | "pan-left" | "pan-right" | "tilt-up" | "tilt-down"
  >;
  /**
   * The size of the video to generate. Default value: `square`
   */
  video_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
};
export type FastAnimatediffTextToVideoOutput = {
  /**
   * Generated video file.
   */
  video: File;
  /**
   * Seed used for generating the video.
   */
  seed: number;
};
export type FastAnimatediffTurboTextToVideoInput = {
  /**
   * The prompt to use for generating the video. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `"(bad quality, worst quality:1.2), ugly faces, bad anime"`
   */
  negative_prompt?: string;
  /**
   * The number of frames to generate for the video. Default value: `16`
   */
  num_frames?: number;
  /**
   * The number of inference steps to perform. 4-12 is recommended for turbo mode. Default value: `4`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when looking for a related image to show you. Default value: `1`
   */
  guidance_scale?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Number of frames per second to extract from the video. Default value: `8`
   */
  fps?: number;
  /**
   * The motions to apply to the video.
   */
  motions?: Array<
    "zoom-out" | "zoom-in" | "pan-left" | "pan-right" | "tilt-up" | "tilt-down"
  >;
  /**
   * The size of the video to generate. Default value: `square`
   */
  video_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
};
export type FastAnimatediffTurboTextToVideoOutput = {
  /**
   * Generated video file.
   */
  video: File;
  /**
   * Seed used for generating the video.
   */
  seed: number;
};
export type FastAnimatediffTurboVideoToVideoInput = {
  /**
   * URL of the video.
   */
  video_url: string | Blob | File;
  /**
   * The first N number of seconds of video to animate. Default value: `3`
   */
  first_n_seconds?: number;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `"(bad quality, worst quality:1.2), ugly faces, bad anime"`
   */
  negative_prompt?: string;
  /**
   * The number of inference steps to perform. 4-12 is recommended for turbo mode. Default value: `8`
   */
  num_inference_steps?: number;
  /**
   * The strength of the input video in the final output. Default value: `0.7`
   */
  strength?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when looking for a related image to show you. Default value: `1`
   */
  guidance_scale?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Number of frames per second to extract from the video. Default value: `8`
   */
  fps?: number;
  /**
   * The motions to apply to the video.
   */
  motions?: Array<
    "zoom-out" | "zoom-in" | "pan-left" | "pan-right" | "tilt-up" | "tilt-down"
  >;
};
export type FastAnimatediffTurboVideoToVideoOutput = {
  /**
   * Generated video file.
   */
  video: File;
  /**
   * Seed used for generating the video.
   */
  seed: number;
};
export type FastAnimatediffVideoToVideoInput = {
  /**
   * URL of the video.
   */
  video_url: string | Blob | File;
  /**
   * The first N number of seconds of video to animate. Default value: `3`
   */
  first_n_seconds?: number;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `"(bad quality, worst quality:1.2), ugly faces, bad anime"`
   */
  negative_prompt?: string;
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The strength of the input video in the final output. Default value: `0.7`
   */
  strength?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Number of frames per second to extract from the video. Default value: `8`
   */
  fps?: number;
  /**
   * The motions to apply to the video.
   */
  motions?: Array<
    "zoom-out" | "zoom-in" | "pan-left" | "pan-right" | "tilt-up" | "tilt-down"
  >;
};
export type FastAnimatediffVideoToVideoOutput = {
  /**
   * Generated video file.
   */
  video: File;
  /**
   * Seed used for generating the video.
   */
  seed: number;
};
export type FastFooocusSdxlImageToImageInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the prompt image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `8`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `2`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts. Default value: `true`
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
  /**
   * If set to true, a smaller model will try to refine the output after it was processed. Default value: `true`
   */
  enable_refiner?: boolean;
};
export type FastFooocusSdxlImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FastFooocusSdxlInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `8`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `2`
   */
  guidance_scale?: number;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts. Default value: `true`
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
  /**
   * If set to true, a smaller model will try to refine the output after it was processed. Default value: `true`
   */
  enable_refiner?: boolean;
};
export type FastFooocusSdxlOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FastLcmDiffusionImageToImageInput = {
  /**
   * The name of the model to use. Default value: `"stabilityai/stable-diffusion-xl-base-1.0"`
   */
  model_name?:
    | "stabilityai/stable-diffusion-xl-base-1.0"
    | "runwayml/stable-diffusion-v1-5";
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `6`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `1.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN. Default value: `true`
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
};
export type FastLcmDiffusionImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FastLcmDiffusionInpaintingInput = {
  /**
   * The name of the model to use. Default value: `"stabilityai/stable-diffusion-xl-base-1.0"`
   */
  model_name?:
    | "stabilityai/stable-diffusion-xl-base-1.0"
    | "runwayml/stable-diffusion-v1-5";
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `6`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `1.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN. Default value: `true`
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
};
export type FastLcmDiffusionInpaintingOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FastLcmDiffusionInput = {
  /**
   * The name of the model to use. Default value: `"stabilityai/stable-diffusion-xl-base-1.0"`
   */
  model_name?:
    | "stabilityai/stable-diffusion-xl-base-1.0"
    | "runwayml/stable-diffusion-v1-5";
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `6`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `1.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN. Default value: `true`
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
};
export type FastLcmDiffusionOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FastLightningSdxlImageToImageInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `"4"`
   */
  num_inference_steps?: "1" | "2" | "4" | "8";
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type FastLightningSdxlImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FastLightningSdxlInpaintingInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `"4"`
   */
  num_inference_steps?: "1" | "2" | "4" | "8";
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type FastLightningSdxlInpaintingOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FastLightningSdxlInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `"4"`
   */
  num_inference_steps?: "1" | "2" | "4" | "8";
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type FastLightningSdxlOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FastSdxlControlnetCannyImageToImageInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The URL of the control image.
   */
  control_image_url: string | Blob | File;
  /**
   * The scale of the controlnet conditioning. Default value: `0.5`
   */
  controlnet_conditioning_scale?: number;
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the control image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
};
export type FastSdxlControlnetCannyImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
};
export type FastSdxlControlnetCannyInpaintingInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The URL of the control image.
   */
  control_image_url: string | Blob | File;
  /**
   * The scale of the controlnet conditioning. Default value: `0.5`
   */
  controlnet_conditioning_scale?: number;
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the control image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
};
export type FastSdxlControlnetCannyInpaintingOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
};
export type FastSdxlControlnetCannyInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The URL of the control image.
   */
  control_image_url: string | Blob | File;
  /**
   * The scale of the controlnet conditioning. Default value: `0.5`
   */
  controlnet_conditioning_scale?: number;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the control image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, DeepCache will be enabled. TBD
   */
  enable_deep_cache?: boolean;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
};
export type FastSdxlControlnetCannyOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
};
export type FastSdxlImageToImageInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
};
export type FastSdxlImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FastSdxlInpaintingInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
};
export type FastSdxlInpaintingOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FastSdxlInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
};
export type FastSdxlOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FastSVDImageInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The motion bucket id determines the motion of the generated video. The
   * higher the number, the more motion there will be. Default value: `127`
   */
  motion_bucket_id?: number;
  /**
   * The conditoning augmentation determines the amount of noise that will be
   * added to the conditioning frame. The higher the number, the more noise
   * there will be, and the less the video will look like the initial image.
   * Increase it for more motion. Default value: `0.02`
   */
  cond_aug?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of steps to run the model for. The higher the number the better
   * the quality and longer it will take to generate. Default value: `4`
   */
  steps?: number;
  /**
   * The FPS of the generated video. The higher the number, the faster the video will
   * play. Total video length is 25 frames. Default value: `10`
   */
  fps?: number;
};
export type FastSvdLcmInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The motion bucket id determines the motion of the generated video. The
   * higher the number, the more motion there will be. Default value: `127`
   */
  motion_bucket_id?: number;
  /**
   * The conditoning augmentation determines the amount of noise that will be
   * added to the conditioning frame. The higher the number, the more noise
   * there will be, and the less the video will look like the initial image.
   * Increase it for more motion. Default value: `0.02`
   */
  cond_aug?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of steps to run the model for. The higher the number the better
   * the quality and longer it will take to generate. Default value: `4`
   */
  steps?: number;
  /**
   * The FPS of the generated video. The higher the number, the faster the video will
   * play. Total video length is 25 frames. Default value: `10`
   */
  fps?: number;
};
export type FastSvdLcmOutput = {
  /**
   * The generated video file.
   */
  video: File;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
};
export type FastSvdLcmTextToVideoInput = {
  /**
   * The prompt to use as a starting point for the generation.
   */
  prompt: string;
  /**
   * The motion bucket id determines the motion of the generated video. The
   * higher the number, the more motion there will be. Default value: `127`
   */
  motion_bucket_id?: number;
  /**
   * The conditoning augmentation determines the amount of noise that will be
   * added to the conditioning frame. The higher the number, the more noise
   * there will be, and the less the video will look like the initial image.
   * Increase it for more motion. Default value: `0.02`
   */
  cond_aug?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of steps to run the model for. The higher the number the better
   * the quality and longer it will take to generate. Default value: `4`
   */
  steps?: number;
  /**
   * The FPS of the generated video. The higher the number, the faster the video will
   * play. Total video length is 25 frames. Default value: `10`
   */
  fps?: number;
  /**
   * The size of the generated video. Default value: `landscape_16_9`
   */
  video_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
};
export type FastSvdLcmTextToVideoOutput = {
  /**
   * The generated video file.
   */
  video: File;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
};
export type FastSVDTextInput = {
  /**
   * The prompt to use as a starting point for the generation.
   */
  prompt: string;
  /**
   * The motion bucket id determines the motion of the generated video. The
   * higher the number, the more motion there will be. Default value: `127`
   */
  motion_bucket_id?: number;
  /**
   * The conditoning augmentation determines the amount of noise that will be
   * added to the conditioning frame. The higher the number, the more noise
   * there will be, and the less the video will look like the initial image.
   * Increase it for more motion. Default value: `0.02`
   */
  cond_aug?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of steps to run the model for. The higher the number the better
   * the quality and longer it will take to generate. Default value: `4`
   */
  steps?: number;
  /**
   * The FPS of the generated video. The higher the number, the faster the video will
   * play. Total video length is 25 frames. Default value: `10`
   */
  fps?: number;
  /**
   * The size of the generated video. Default value: `landscape_16_9`
   */
  video_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
};
export type FastSvdTextToVideoInput = {
  /**
   * The prompt to use as a starting point for the generation.
   */
  prompt: string;
  /**
   * The motion bucket id determines the motion of the generated video. The
   * higher the number, the more motion there will be. Default value: `127`
   */
  motion_bucket_id?: number;
  /**
   * The conditoning augmentation determines the amount of noise that will be
   * added to the conditioning frame. The higher the number, the more noise
   * there will be, and the less the video will look like the initial image.
   * Increase it for more motion. Default value: `0.02`
   */
  cond_aug?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of steps to run the model for. The higher the number the better
   * the quality and longer it will take to generate. Default value: `20`
   */
  steps?: number;
  /**
   * Enabling [DeepCache](https://github.com/horseee/DeepCache) will make the execution
   * faster, but might sometimes degrade overall quality. The higher the setting, the
   * faster the execution will be, but the more quality might be lost. Default value: `"none"`
   */
  deep_cache?: "none" | "minimum" | "medium" | "high";
  /**
   * The FPS of the generated video. The higher the number, the faster the video will
   * play. Total video length is 25 frames. Default value: `10`
   */
  fps?: number;
  /**
   * The negative prompt to use as a starting point for the generation. Default value: `"unrealistic, saturated, high contrast, big nose, painting, drawing, sketch, cartoon, anime, manga, render, CG, 3d, watermark, signature, label"`
   */
  negative_prompt?: string;
  /**
   * The size of the generated video. Default value: `landscape_16_9`
   */
  video_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
};
export type FastSvdTextToVideoOutput = {
  /**
   * The generated video file.
   */
  video: File;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
};
export type FastTurboDiffusionImageToImageInput = {
  /**
   * The name of the model to use. Default value: `"stabilityai/sdxl-turbo"`
   */
  model_name?: "stabilityai/sdxl-turbo" | "stabilityai/sd-turbo";
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `2`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `1`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN. Default value: `true`
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
};
export type FastTurboDiffusionImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
};
export type FastTurboDiffusionInpaintingInput = {
  /**
   * The name of the model to use. Default value: `"stabilityai/sdxl-turbo"`
   */
  model_name?: "stabilityai/sdxl-turbo" | "stabilityai/sd-turbo";
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `2`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `1`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN. Default value: `true`
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
};
export type FastTurboDiffusionInpaintingOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
};
export type FastTurboDiffusionInput = {
  /**
   * The name of the model to use. Default value: `"stabilityai/sdxl-turbo"`
   */
  model_name?: "stabilityai/sdxl-turbo" | "stabilityai/sd-turbo";
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `2`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `1`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN. Default value: `true`
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
};
export type FastTurboDiffusionOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
};
export type FfmpegApiComposeInput = {
  /**
   * List of tracks to be combined into the final media
   */
  tracks: Array<Track>;
};
export type FfmpegApiComposeOutput = {
  /**
   * URL of the processed video file
   */
  video_url: string | Blob | File;
  /**
   * URL of the video's thumbnail image
   */
  thumbnail_url: string | Blob | File;
};
export type FfmpegApiMetadataInput = {
  /**
   * URL of the media file (video or audio) to analyze
   */
  media_url: string | Blob | File;
  /**
   * Whether to extract the start and end frames for videos. Note that when true the request will be slower.
   */
  extract_frames?: boolean;
};
export type FfmpegApiMetadataOutput = {
  /**
   * Metadata for the analyzed media file (either Video or Audio)
   */
  media: Video | Audio;
};
export type FfmpegApiWaveformInput = {
  /**
   * URL of the audio file to analyze
   */
  media_url: string | Blob | File;
  /**
   * Controls how many points are sampled per second of audio. Lower values (e.g. 1-2) create a coarser waveform, higher values (e.g. 4-10) create a more detailed one. Default value: `4`
   */
  points_per_second?: number;
  /**
   * Number of decimal places for the waveform values. Higher values provide more precision but increase payload size. Default value: `2`
   */
  precision?: number;
  /**
   * Size of the smoothing window. Higher values create a smoother waveform. Must be an odd number. Default value: `3`
   */
  smoothing_window?: number;
};
export type FfmpegApiWaveformOutput = {
  /**
   * Normalized waveform data as an array of values between -1 and 1. The number of points is determined by audio duration × points_per_second.
   */
  waveform: Array<number>;
  /**
   * Duration of the audio in seconds
   */
  duration: number;
  /**
   * Number of points in the waveform data
   */
  points: number;
  /**
   * Number of decimal places used in the waveform values
   */
  precision: number;
};
export type Florence2LargeCaptionInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
};
export type Florence2LargeCaptionOutput = {
  /**
   * Results from the model
   */
  results: string;
};
export type Florence2LargeCaptionToPhraseGroundingInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
  /**
   * Text input for the task
   */
  text_input: string;
};
export type Florence2LargeCaptionToPhraseGroundingOutput = {
  /**
   * Results from the model
   */
  results: BoundingBoxes;
  /**
   * Processed image
   */
  image?: Image;
};
export type Florence2LargeDenseRegionCaptionInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
};
export type Florence2LargeDenseRegionCaptionOutput = {
  /**
   * Results from the model
   */
  results: BoundingBoxes;
  /**
   * Processed image
   */
  image?: Image;
};
export type Florence2LargeDetailedCaptionInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
};
export type Florence2LargeDetailedCaptionOutput = {
  /**
   * Results from the model
   */
  results: string;
};
export type Florence2LargeMoreDetailedCaptionInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
};
export type Florence2LargeMoreDetailedCaptionOutput = {
  /**
   * Results from the model
   */
  results: string;
};
export type Florence2LargeObjectDetectionInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
};
export type Florence2LargeObjectDetectionOutput = {
  /**
   * Results from the model
   */
  results: BoundingBoxes;
  /**
   * Processed image
   */
  image?: Image;
};
export type Florence2LargeOcrInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
};
export type Florence2LargeOcrOutput = {
  /**
   * Results from the model
   */
  results: string;
};
export type Florence2LargeOcrWithRegionInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
};
export type Florence2LargeOcrWithRegionOutput = {
  /**
   * Results from the model
   */
  results: OCRBoundingBox;
  /**
   * Processed image
   */
  image?: Image;
};
export type Florence2LargeOpenVocabularyDetectionInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
  /**
   * Text input for the task
   */
  text_input: string;
};
export type Florence2LargeOpenVocabularyDetectionOutput = {
  /**
   * Results from the model
   */
  results: BoundingBoxes;
  /**
   * Processed image
   */
  image?: Image;
};
export type Florence2LargeReferringExpressionSegmentationInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
  /**
   * Text input for the task
   */
  text_input: string;
};
export type Florence2LargeReferringExpressionSegmentationOutput = {
  /**
   * Results from the model
   */
  results: PolygonOutput;
  /**
   * Processed image
   */
  image?: Image;
};
export type Florence2LargeRegionProposalInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
};
export type Florence2LargeRegionProposalOutput = {
  /**
   * Results from the model
   */
  results: BoundingBoxes;
  /**
   * Processed image
   */
  image?: Image;
};
export type Florence2LargeRegionToCategoryInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
  /**
   * The user input coordinates
   */
  region: Region;
};
export type Florence2LargeRegionToCategoryOutput = {
  /**
   * Results from the model
   */
  results: string;
};
export type Florence2LargeRegionToDescriptionInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
  /**
   * The user input coordinates
   */
  region: Region;
};
export type Florence2LargeRegionToDescriptionOutput = {
  /**
   * Results from the model
   */
  results: string;
};
export type Florence2LargeRegionToSegmentationInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
  /**
   * The user input coordinates
   */
  region: Region;
};
export type Florence2LargeRegionToSegmentationOutput = {
  /**
   * Results from the model
   */
  results: PolygonOutput;
  /**
   * Processed image
   */
  image?: Image;
};
export type FluxDevImageToImageInput = {
  /**
   * The URL of the image to generate an image from.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The strength of the initial image. Higher strength values are better for this model. Default value: `0.95`
   */
  strength?: number;
  /**
   * The number of inference steps to perform. Default value: `40`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type FluxDevImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxDevInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type FluxDevOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxDevReduxInput = {
  /**
   * The URL of the image to generate an image from.
   */
  image_url: string | Blob | File;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type FluxDevReduxOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxDifferentialDiffusionInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * URL of image to use as initial image.
   */
  image_url: string | Blob | File;
  /**
   * URL of change map.
   */
  change_map_image_url: string | Blob | File;
  /**
   * The strength to use for image-to-image. 1.0 is completely remakes the image while 0.0 preserves the original. Default value: `0.85`
   */
  strength?: number;
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type FluxDifferentialDiffusionOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxGeneralDifferentialDiffusionInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The LoRAs to use for the image generation which use a control image. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  control_loras?: Array<ControlLoraWeight>;
  /**
   * The controlnets to use for the image generation. Only one controlnet is supported at the moment. Default value: ``
   */
  controlnets?: Array<ControlNet>;
  /**
   * The controlnet unions to use for the image generation. Only one controlnet is supported at the moment. Default value: ``
   */
  controlnet_unions?: Array<ControlNetUnion>;
  /**
   * IP-Adapter to use for image generation. Default value: ``
   */
  ip_adapters?: Array<IPAdapter>;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  real_cfg_scale?: number;
  /**
   * Uses classical CFG as in SD1.5, SDXL, etc. Increases generation times and price when set to be true.
   * If using XLabs IP-Adapter v1, this will be turned on!.
   */
  use_real_cfg?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * URL of Image for Reference-Only
   */
  reference_image_url?: string | Blob | File;
  /**
   * Strength of reference_only generation. Only used if a reference image is provided. Default value: `0.65`
   */
  reference_strength?: number;
  /**
   * The percentage of the total timesteps when the reference guidance is to bestarted.
   */
  reference_start?: number;
  /**
   * The percentage of the total timesteps when the reference guidance is to be ended. Default value: `1`
   */
  reference_end?: number;
  /**
   * Base shift for the scheduled timesteps Default value: `0.5`
   */
  base_shift?: number;
  /**
   * Max shift for the scheduled timesteps Default value: `1.15`
   */
  max_shift?: number;
  /**
   * URL of image to use as initial image.
   */
  image_url: string | Blob | File;
  /**
   * URL of change map.
   */
  change_map_image_url: string | Blob | File;
  /**
   * The strength to use for differential diffusion. 1.0 is completely remakes the image while 0.0 preserves the original. Default value: `0.85`
   */
  strength?: number;
};
export type FluxGeneralDifferentialDiffusionOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxGeneralImageToImageInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The LoRAs to use for the image generation which use a control image. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  control_loras?: Array<ControlLoraWeight>;
  /**
   * The controlnets to use for the image generation. Only one controlnet is supported at the moment. Default value: ``
   */
  controlnets?: Array<ControlNet>;
  /**
   * The controlnet unions to use for the image generation. Only one controlnet is supported at the moment. Default value: ``
   */
  controlnet_unions?: Array<ControlNetUnion>;
  /**
   * IP-Adapter to use for image generation. Default value: ``
   */
  ip_adapters?: Array<IPAdapter>;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  real_cfg_scale?: number;
  /**
   * Uses classical CFG as in SD1.5, SDXL, etc. Increases generation times and price when set to be true.
   * If using XLabs IP-Adapter v1, this will be turned on!.
   */
  use_real_cfg?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * URL of Image for Reference-Only
   */
  reference_image_url?: string | Blob | File;
  /**
   * Strength of reference_only generation. Only used if a reference image is provided. Default value: `0.65`
   */
  reference_strength?: number;
  /**
   * The percentage of the total timesteps when the reference guidance is to bestarted.
   */
  reference_start?: number;
  /**
   * The percentage of the total timesteps when the reference guidance is to be ended. Default value: `1`
   */
  reference_end?: number;
  /**
   * Base shift for the scheduled timesteps Default value: `0.5`
   */
  base_shift?: number;
  /**
   * Max shift for the scheduled timesteps Default value: `1.15`
   */
  max_shift?: number;
  /**
   * URL of image to use for inpainting. or img2img
   */
  image_url: string | Blob | File;
  /**
   * The strength to use for inpainting/image-to-image. Only used if the image_url is provided. 1.0 is completely remakes the image while 0.0 preserves the original. Default value: `0.85`
   */
  strength?: number;
};
export type FluxGeneralImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxGeneralInpaintingInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The LoRAs to use for the image generation which use a control image. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  control_loras?: Array<ControlLoraWeight>;
  /**
   * The controlnets to use for the image generation. Only one controlnet is supported at the moment. Default value: ``
   */
  controlnets?: Array<ControlNet>;
  /**
   * The controlnet unions to use for the image generation. Only one controlnet is supported at the moment. Default value: ``
   */
  controlnet_unions?: Array<ControlNetUnion>;
  /**
   * IP-Adapter to use for image generation. Default value: ``
   */
  ip_adapters?: Array<IPAdapter>;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  real_cfg_scale?: number;
  /**
   * Uses classical CFG as in SD1.5, SDXL, etc. Increases generation times and price when set to be true.
   * If using XLabs IP-Adapter v1, this will be turned on!.
   */
  use_real_cfg?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * URL of Image for Reference-Only
   */
  reference_image_url?: string | Blob | File;
  /**
   * Strength of reference_only generation. Only used if a reference image is provided. Default value: `0.65`
   */
  reference_strength?: number;
  /**
   * The percentage of the total timesteps when the reference guidance is to bestarted.
   */
  reference_start?: number;
  /**
   * The percentage of the total timesteps when the reference guidance is to be ended. Default value: `1`
   */
  reference_end?: number;
  /**
   * Base shift for the scheduled timesteps Default value: `0.5`
   */
  base_shift?: number;
  /**
   * Max shift for the scheduled timesteps Default value: `1.15`
   */
  max_shift?: number;
  /**
   * URL of image to use for inpainting. or img2img
   */
  image_url: string | Blob | File;
  /**
   * The strength to use for inpainting/image-to-image. Only used if the image_url is provided. 1.0 is completely remakes the image while 0.0 preserves the original. Default value: `0.85`
   */
  strength?: number;
  /**
   * The mask to area to Inpaint in.
   */
  mask_url: string | Blob | File;
};
export type FluxGeneralInpaintingOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxGeneralInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The LoRAs to use for the image generation which use a control image. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  control_loras?: Array<ControlLoraWeight>;
  /**
   * The controlnets to use for the image generation. Only one controlnet is supported at the moment. Default value: ``
   */
  controlnets?: Array<ControlNet>;
  /**
   * The controlnet unions to use for the image generation. Only one controlnet is supported at the moment. Default value: ``
   */
  controlnet_unions?: Array<ControlNetUnion>;
  /**
   * IP-Adapter to use for image generation. Default value: ``
   */
  ip_adapters?: Array<IPAdapter>;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  real_cfg_scale?: number;
  /**
   * Uses classical CFG as in SD1.5, SDXL, etc. Increases generation times and price when set to be true.
   * If using XLabs IP-Adapter v1, this will be turned on!.
   */
  use_real_cfg?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * URL of Image for Reference-Only
   */
  reference_image_url?: string | Blob | File;
  /**
   * Strength of reference_only generation. Only used if a reference image is provided. Default value: `0.65`
   */
  reference_strength?: number;
  /**
   * The percentage of the total timesteps when the reference guidance is to bestarted.
   */
  reference_start?: number;
  /**
   * The percentage of the total timesteps when the reference guidance is to be ended. Default value: `1`
   */
  reference_end?: number;
  /**
   * Base shift for the scheduled timesteps Default value: `0.5`
   */
  base_shift?: number;
  /**
   * Max shift for the scheduled timesteps Default value: `1.15`
   */
  max_shift?: number;
};
export type FluxGeneralOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxGeneralRfInversionInput = {
  /**
   * The prompt to edit the image with
   */
  prompt: string;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The LoRAs to use for the image generation which use a control image. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  control_loras?: Array<ControlLoraWeight>;
  /**
   * The controlnets to use for the image generation. Only one controlnet is supported at the moment. Default value: ``
   */
  controlnets?: Array<ControlNet>;
  /**
   * The controlnet unions to use for the image generation. Only one controlnet is supported at the moment. Default value: ``
   */
  controlnet_unions?: Array<ControlNetUnion>;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * URL of Image for Reference-Only
   */
  reference_image_url?: string | Blob | File;
  /**
   * Strength of reference_only generation. Only used if a reference image is provided. Default value: `0.65`
   */
  reference_strength?: number;
  /**
   * The percentage of the total timesteps when the reference guidance is to bestarted.
   */
  reference_start?: number;
  /**
   * The percentage of the total timesteps when the reference guidance is to be ended. Default value: `1`
   */
  reference_end?: number;
  /**
   * Base shift for the scheduled timesteps Default value: `0.5`
   */
  base_shift?: number;
  /**
   * Max shift for the scheduled timesteps Default value: `1.15`
   */
  max_shift?: number;
  /**
   * URL of image to be edited
   */
  image_url: string | Blob | File;
  /**
   * The controller guidance (gamma) used in the creation of structured noise. Default value: `0.6`
   */
  controller_guidance_forward?: number;
  /**
   * The controller guidance (eta) used in the denoising process.Using values closer to 1 will result in an image closer to input. Default value: `0.75`
   */
  controller_guidance_reverse?: number;
  /**
   * Timestep to start guidance during reverse process.
   */
  reverse_guidance_start?: number;
  /**
   * Timestep to stop guidance during reverse process. Default value: `8`
   */
  reverse_guidance_end?: number;
  /**
   * Scheduler for applying reverse guidance. Default value: `"constant"`
   */
  reverse_guidance_schedule?:
    | "constant"
    | "linear_increase"
    | "linear_decrease";
};
export type FluxGeneralRfInversionOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxLoraCannyInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `30`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * URL of image to use for canny input
   */
  image_url: string | Blob | File;
};
export type FluxLoraCannyOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxLoraDepthInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `10`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * URL of image to use for depth input
   */
  image_url: string | Blob | File;
};
export type FluxLoraDepthOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxLoraFastTrainingInput = {
  /**
   * URL to zip archive with images. Try to use at least 4 images in general the more the better.
   *
   * In addition to images the archive can contain text files with captions. Each text file should have the same name as the image file it corresponds to.
   */
  images_data_url: string | Blob | File;
  /**
   * Trigger word to be used in the captions. If None, a trigger word will not be used.
   * If no captions are provide the trigger_word will be used instead of captions. If captions are the trigger word will not be used.
   */
  trigger_word?: string;
  /**
   * If True segmentation masks will be used in the weight the training loss. For people a face mask is used if possible. Default value: `true`
   */
  create_masks?: boolean;
  /**
   * Number of steps to train the LoRA on.
   */
  steps?: number;
  /**
   * If True, the training will be for a style. This will deactivate segmentation, captioning and will use trigger word instead. Use the trigger word to specify the style.
   */
  is_style?: boolean;
  /**
   * Specifies whether the input data is already in a processed format. When set to False (default), the system expects raw input where image files and their corresponding caption files share the same name (e.g., 'photo.jpg' and 'photo.txt'). Set to True if your data is already in a preprocessed format.
   */
  is_input_format_already_preprocessed?: boolean;
  /**
   * The format of the archive. If not specified, the format will be inferred from the URL.
   */
  data_archive_format?: string;
};
export type FluxLoraFastTrainingOutput = {
  /**
   * URL to the trained diffusers lora weights.
   */
  diffusers_lora_file: File;
  /**
   * URL to the training configuration file.
   */
  config_file: File;
  /**
   * URL to the preprocessed images.
   */
  debug_preprocessed_output?: File;
};
export type FluxLoraFillInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `30`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * URL of image to use for fill operation
   */
  image_url: string | Blob | File;
  /**
   * The mask to area to Inpaint in.
   */
  mask_url: string | Blob | File;
  /**
   * Specifies whether to paste-back the original image onto to the non-inpainted areas of the output Default value: `true`
   */
  paste_back?: boolean;
};
export type FluxLoraFillOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxLoraImageToImageInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * URL of image to use for inpainting. or img2img
   */
  image_url: string | Blob | File;
  /**
   * The strength to use for inpainting/image-to-image. Only used if the image_url is provided. 1.0 is completely remakes the image while 0.0 preserves the original. Default value: `0.85`
   */
  strength?: number;
};
export type FluxLoraImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxLoraInpaintingInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * URL of image to use for inpainting. or img2img
   */
  image_url: string | Blob | File;
  /**
   * The strength to use for inpainting/image-to-image. Only used if the image_url is provided. 1.0 is completely remakes the image while 0.0 preserves the original. Default value: `0.85`
   */
  strength?: number;
  /**
   * The mask to area to Inpaint in.
   */
  mask_url: string | Blob | File;
};
export type FluxLoraInpaintingOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxLoraInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
};
export type FluxLoraOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxLoraPortraitTrainerInput = {
  /**
   * URL to zip archive with images of a consistent style. Try to use at least 10 images, although more is better.
   *
   * In addition to images the archive can contain text files with captions. Each text file should have the same name as the image file it corresponds to.
   *
   * The captions can include a special string `[trigger]`. If a trigger_word is specified, it will replace `[trigger]` in the captions.
   */
  images_data_url: string | Blob | File;
  /**
   * Trigger phrase to be used in the captions. If None, a trigger word will not be used.
   * If no captions are provide the trigger_work will be used instead of captions. If captions are provided, the trigger word will replace the `[trigger]` string in the captions.
   */
  trigger_phrase?: string;
  /**
   * Learning rate to use for training. Default value: `0.00009`
   */
  learning_rate?: number;
  /**
   * Number of steps to train the LoRA on. Default value: `2500`
   */
  steps?: number;
  /**
   * If True, multiresolution training will be used. Default value: `true`
   */
  multiresolution_training?: boolean;
  /**
   * If True, the subject will be cropped from the image. Default value: `true`
   */
  subject_crop?: boolean;
  /**
   * The format of the archive. If not specified, the format will be inferred from the URL.
   */
  data_archive_format?: string;
  /**
   * URL to a checkpoint to resume training from. Default value: `""`
   */
  resume_from_checkpoint?: string;
};
export type FluxLoraPortraitTrainerOutput = {
  /**
   * URL to the trained diffusers lora weights.
   */
  diffusers_lora_file: File;
  /**
   * URL to the training configuration file.
   */
  config_file: File;
};
export type FluxProCannyControlFinetunedInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `30`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The control image URL to generate the Canny edge map from.
   */
  control_image_url: string | Blob | File;
  /**
   * References your specific model
   */
  finetune_id: string;
  /**
   * Controls finetune influence.
   * Increase this value if your target concept isn't showing up strongly enough.
   * The optimal setting depends on your finetune and prompt
   */
  finetune_strength: number;
};
export type FluxProCannyControlInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The control image URL to generate the Canny edge map from.
   */
  control_image_url: string | Blob | File;
};
export type FluxProDepthControlFinetunedInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `15`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The control image URL to generate the depth map from.
   */
  control_image_url: string | Blob | File;
  /**
   * References your specific model
   */
  finetune_id: string;
  /**
   * Controls finetune influence.
   * Increase this value if your target concept isn't showing up strongly enough.
   * The optimal setting depends on your finetune and prompt
   */
  finetune_strength: number;
};
export type FluxProDepthControlInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The control image URL to generate the depth map from.
   */
  control_image_url: string | Blob | File;
};
export type FluxProFillFinetunedInput = {
  /**
   * The prompt to fill the masked part of the image.
   */
  prompt: string;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The image URL to generate an image from. Needs to match the dimensions of the mask.
   */
  image_url: string | Blob | File;
  /**
   * The mask URL to inpaint the image. Needs to match the dimensions of the input image.
   */
  mask_url: string | Blob | File;
  /**
   * References your specific model
   */
  finetune_id: string;
  /**
   * Controls finetune influence.
   * Increase this value if your target concept isn't showing up strongly enough.
   * The optimal setting depends on your finetune and prompt
   */
  finetune_strength: number;
};
export type FluxProFillInput = {
  /**
   * The prompt to fill the masked part of the image.
   */
  prompt: string;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The image URL to generate an image from. Needs to match the dimensions of the mask.
   */
  image_url: string | Blob | File;
  /**
   * The mask URL to inpaint the image. Needs to match the dimensions of the input image.
   */
  mask_url: string | Blob | File;
};
export type FluxProNewInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
};
export type FluxProNewOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxProOutpaintInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The image URL to expand using outpainting
   */
  image_url: string | Blob | File;
  /**
   * Pixels to expand at the top
   */
  expand_top?: number;
  /**
   * Pixels to expand at the bottom
   */
  expand_bottom?: number;
  /**
   * Pixels to expand on the left
   */
  expand_left?: number;
  /**
   * Pixels to expand on the right
   */
  expand_right?: number;
};
export type FluxProPlusTextToImageInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
};
export type FluxProTextToImageFinetunedInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * References your specific model
   */
  finetune_id: string;
  /**
   * Controls finetune influence.
   * Increase this value if your target concept isn't showing up strongly enough.
   * The optimal setting depends on your finetune and prompt
   */
  finetune_strength: number;
};
export type FluxProTextToImageInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
};
export type FluxProTrainerInput = {
  /**
   * URL to the training data
   */
  data_url: string | Blob | File;
  /**
   * Determines the finetuning approach based on your concept Default value: `"character"`
   */
  mode?: "character" | "product" | "style" | "general";
  /**
   * Descriptive note to identify your fine-tune since names are UUIDs. Will be displayed in finetune_details.
   */
  finetune_comment: string;
  /**
   * Defines training duration Default value: `300`
   */
  iterations?: number;
  /**
   * Learning rate for training. Lower values may be needed for certain scenarios. Default is 1e-5 for full and 1e-4 for LoRA.
   */
  learning_rate?: number;
  /**
   * The speed priority will improve training and inference speed Default value: `"quality"`
   */
  priority?: "speed" | "quality";
  /**
   * Enables/disables automatic image captioning Default value: `true`
   */
  captioning?: boolean;
  /**
   * Unique word/phrase that will be used in the captions, to reference the newly introduced concepts Default value: `"TOK"`
   */
  trigger_word?: string;
  /**
   * Choose between 32 and 16. A lora_rank of 16 can increase training efficiency and decrease loading times. Default value: `32`
   */
  lora_rank?: number;
  /**
   * Choose between 'full' for a full finetuning + post hoc extraction of the trained weights into a LoRA or 'lora' for a raw LoRA training Default value: `"full"`
   */
  finetune_type?: "full" | "lora";
};
export type FluxProTrainerOutput = {
  /**
   * References your specific model
   */
  finetune_id: string;
};
export type FluxProUltraTextToImageFinetunedInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The aspect ratio of the generated image. Default value: `"16:9"`
   */
  aspect_ratio?: "21:9" | "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "9:21";
  /**
   * Generate less processed, more natural-looking images.
   */
  raw?: boolean;
  /**
   * References your specific model
   */
  finetune_id: string;
  /**
   * Controls finetune influence.
   * Increase this value if your target concept isn't showing up strongly enough.
   * The optimal setting depends on your finetune and prompt
   */
  finetune_strength: number;
};
export type FluxProUltraTextToImageInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The aspect ratio of the generated image. Default value: `"16:9"`
   */
  aspect_ratio?: "21:9" | "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "9:21";
  /**
   * Generate less processed, more natural-looking images.
   */
  raw?: boolean;
};
export type FluxProV11Input = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
};
export type FluxProV11Output = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxProV11ReduxInput = {
  /**
   * The prompt to generate an image from. Default value: `""`
   */
  prompt?: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The image URL to generate an image from. Needs to match the dimensions of the mask.
   */
  image_url: string | Blob | File;
};
export type FluxProV11ReduxOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxProV11UltraFinetunedInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The aspect ratio of the generated image. Default value: `"16:9"`
   */
  aspect_ratio?: "21:9" | "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "9:21";
  /**
   * Generate less processed, more natural-looking images.
   */
  raw?: boolean;
  /**
   * References your specific model
   */
  finetune_id: string;
  /**
   * Controls finetune influence.
   * Increase this value if your target concept isn't showing up strongly enough.
   * The optimal setting depends on your finetune and prompt
   */
  finetune_strength: number;
};
export type FluxProV11UltraFinetunedOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxProV11UltraInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The aspect ratio of the generated image. Default value: `"16:9"`
   */
  aspect_ratio?: "21:9" | "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "9:21";
  /**
   * Generate less processed, more natural-looking images.
   */
  raw?: boolean;
};
export type FluxProV11UltraOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxProV11UltraReduxInput = {
  /**
   * The prompt to generate an image from. Default value: `""`
   */
  prompt?: string;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The aspect ratio of the generated image. Default value: `"16:9"`
   */
  aspect_ratio?: "21:9" | "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "9:21";
  /**
   * Generate less processed, more natural-looking images.
   */
  raw?: boolean;
  /**
   * The image URL to generate an image from. Needs to match the dimensions of the mask.
   */
  image_url: string | Blob | File;
  /**
   * The strength of the image prompt, between 0 and 1. Default value: `0.1`
   */
  image_prompt_strength?: number;
};
export type FluxProV11UltraReduxOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxProV1CannyFinetunedInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `30`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The control image URL to generate the Canny edge map from.
   */
  control_image_url: string | Blob | File;
  /**
   * References your specific model
   */
  finetune_id: string;
  /**
   * Controls finetune influence.
   * Increase this value if your target concept isn't showing up strongly enough.
   * The optimal setting depends on your finetune and prompt
   */
  finetune_strength: number;
};
export type FluxProV1CannyFinetunedOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxProV1CannyInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The control image URL to generate the Canny edge map from.
   */
  control_image_url: string | Blob | File;
};
export type FluxProV1CannyOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxProV1DepthFinetunedInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `15`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The control image URL to generate the depth map from.
   */
  control_image_url: string | Blob | File;
  /**
   * References your specific model
   */
  finetune_id: string;
  /**
   * Controls finetune influence.
   * Increase this value if your target concept isn't showing up strongly enough.
   * The optimal setting depends on your finetune and prompt
   */
  finetune_strength: number;
};
export type FluxProV1DepthFinetunedOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxProV1DepthInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The control image URL to generate the depth map from.
   */
  control_image_url: string | Blob | File;
};
export type FluxProV1DepthOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxProV1FillFinetunedInput = {
  /**
   * The prompt to fill the masked part of the image.
   */
  prompt: string;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The image URL to generate an image from. Needs to match the dimensions of the mask.
   */
  image_url: string | Blob | File;
  /**
   * The mask URL to inpaint the image. Needs to match the dimensions of the input image.
   */
  mask_url: string | Blob | File;
  /**
   * References your specific model
   */
  finetune_id: string;
  /**
   * Controls finetune influence.
   * Increase this value if your target concept isn't showing up strongly enough.
   * The optimal setting depends on your finetune and prompt
   */
  finetune_strength: number;
};
export type FluxProV1FillFinetunedOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxProV1FillInput = {
  /**
   * The prompt to fill the masked part of the image.
   */
  prompt: string;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The image URL to generate an image from. Needs to match the dimensions of the mask.
   */
  image_url: string | Blob | File;
  /**
   * The mask URL to inpaint the image. Needs to match the dimensions of the input image.
   */
  mask_url: string | Blob | File;
};
export type FluxProV1FillOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxProV1ReduxInput = {
  /**
   * The prompt to generate an image from. Default value: `""`
   */
  prompt?: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. Default value: `"2"`
   */
  safety_tolerance?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The image URL to generate an image from. Needs to match the dimensions of the mask.
   */
  image_url: string | Blob | File;
};
export type FluxProV1ReduxOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxPulidInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * URL of image to use for inpainting.
   */
  reference_image_url: string | Blob | File;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `20`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `4`
   */
  guidance_scale?: number;
  /**
   * The prompt to generate an image from. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of steps to start the CFG from.
   */
  start_step?: number;
  /**
   * The weight of the CFG loss. Default value: `1`
   */
  true_cfg?: number;
  /**
   * The weight of the ID loss. Default value: `1`
   */
  id_weight?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The maximum sequence length for the model. Default value: `"128"`
   */
  max_sequence_length?: "128" | "256" | "512";
};
export type FluxPulidOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxSchnellInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `4`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type FluxSchnellOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxSchnellReduxInput = {
  /**
   * The URL of the image to generate an image from.
   */
  image_url: string | Blob | File;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `4`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type FluxSchnellReduxOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FluxSubjectInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * URL of image of the subject
   */
  image_url: string | Blob | File;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `8`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"png"`
   */
  output_format?: "jpeg" | "png";
};
export type FluxSubjectOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type FooocusImagePromptInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results. Default value: `""`
   */
  prompt?: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The style to use. Default value: `Fooocus Enhance,Fooocus V2,Fooocus Sharp`
   */
  styles?: Array<
    | "Fooocus V2"
    | "Fooocus Enhance"
    | "Fooocus Sharp"
    | "Fooocus Semi Realistic"
    | "Fooocus Masterpiece"
    | "Fooocus Photograph"
    | "Fooocus Negative"
    | "Fooocus Cinematic"
    | "SAI 3D Model"
    | "SAI Analog Film"
    | "SAI Anime"
    | "SAI Cinematic"
    | "SAI Comic Book"
    | "SAI Craft Clay"
    | "SAI Digital Art"
    | "SAI Enhance"
    | "SAI Fantasy Art"
    | "SAI Isometric"
    | "SAI Line Art"
    | "SAI Lowpoly"
    | "SAI Neonpunk"
    | "SAI Origami"
    | "SAI Photographic"
    | "SAI Pixel Art"
    | "SAI Texture"
    | "MRE Cinematic Dynamic"
    | "MRE Spontaneous Picture"
    | "MRE Artistic Vision"
    | "MRE Dark Dream"
    | "MRE Gloomy Art"
    | "MRE Bad Dream"
    | "MRE Underground"
    | "MRE Surreal Painting"
    | "MRE Dynamic Illustration"
    | "MRE Undead Art"
    | "MRE Elemental Art"
    | "MRE Space Art"
    | "MRE Ancient Illustration"
    | "MRE Brave Art"
    | "MRE Heroic Fantasy"
    | "MRE Dark Cyberpunk"
    | "MRE Lyrical Geometry"
    | "MRE Sumi E Symbolic"
    | "MRE Sumi E Detailed"
    | "MRE Manga"
    | "MRE Anime"
    | "MRE Comic"
    | "Ads Advertising"
    | "Ads Automotive"
    | "Ads Corporate"
    | "Ads Fashion Editorial"
    | "Ads Food Photography"
    | "Ads Gourmet Food Photography"
    | "Ads Luxury"
    | "Ads Real Estate"
    | "Ads Retail"
    | "Artstyle Abstract"
    | "Artstyle Abstract Expressionism"
    | "Artstyle Art Deco"
    | "Artstyle Art Nouveau"
    | "Artstyle Constructivist"
    | "Artstyle Cubist"
    | "Artstyle Expressionist"
    | "Artstyle Graffiti"
    | "Artstyle Hyperrealism"
    | "Artstyle Impressionist"
    | "Artstyle Pointillism"
    | "Artstyle Pop Art"
    | "Artstyle Psychedelic"
    | "Artstyle Renaissance"
    | "Artstyle Steampunk"
    | "Artstyle Surrealist"
    | "Artstyle Typography"
    | "Artstyle Watercolor"
    | "Futuristic Biomechanical"
    | "Futuristic Biomechanical Cyberpunk"
    | "Futuristic Cybernetic"
    | "Futuristic Cybernetic Robot"
    | "Futuristic Cyberpunk Cityscape"
    | "Futuristic Futuristic"
    | "Futuristic Retro Cyberpunk"
    | "Futuristic Retro Futurism"
    | "Futuristic Sci Fi"
    | "Futuristic Vaporwave"
    | "Game Bubble Bobble"
    | "Game Cyberpunk Game"
    | "Game Fighting Game"
    | "Game Gta"
    | "Game Mario"
    | "Game Minecraft"
    | "Game Pokemon"
    | "Game Retro Arcade"
    | "Game Retro Game"
    | "Game Rpg Fantasy Game"
    | "Game Strategy Game"
    | "Game Streetfighter"
    | "Game Zelda"
    | "Misc Architectural"
    | "Misc Disco"
    | "Misc Dreamscape"
    | "Misc Dystopian"
    | "Misc Fairy Tale"
    | "Misc Gothic"
    | "Misc Grunge"
    | "Misc Horror"
    | "Misc Kawaii"
    | "Misc Lovecraftian"
    | "Misc Macabre"
    | "Misc Manga"
    | "Misc Metropolis"
    | "Misc Minimalist"
    | "Misc Monochrome"
    | "Misc Nautical"
    | "Misc Space"
    | "Misc Stained Glass"
    | "Misc Techwear Fashion"
    | "Misc Tribal"
    | "Misc Zentangle"
    | "Papercraft Collage"
    | "Papercraft Flat Papercut"
    | "Papercraft Kirigami"
    | "Papercraft Paper Mache"
    | "Papercraft Paper Quilling"
    | "Papercraft Papercut Collage"
    | "Papercraft Papercut Shadow Box"
    | "Papercraft Stacked Papercut"
    | "Papercraft Thick Layered Papercut"
    | "Photo Alien"
    | "Photo Film Noir"
    | "Photo Glamour"
    | "Photo Hdr"
    | "Photo Iphone Photographic"
    | "Photo Long Exposure"
    | "Photo Neon Noir"
    | "Photo Silhouette"
    | "Photo Tilt Shift"
    | "Cinematic Diva"
    | "Abstract Expressionism"
    | "Academia"
    | "Action Figure"
    | "Adorable 3D Character"
    | "Adorable Kawaii"
    | "Art Deco"
    | "Art Nouveau"
    | "Astral Aura"
    | "Avant Garde"
    | "Baroque"
    | "Bauhaus Style Poster"
    | "Blueprint Schematic Drawing"
    | "Caricature"
    | "Cel Shaded Art"
    | "Character Design Sheet"
    | "Classicism Art"
    | "Color Field Painting"
    | "Colored Pencil Art"
    | "Conceptual Art"
    | "Constructivism"
    | "Cubism"
    | "Dadaism"
    | "Dark Fantasy"
    | "Dark Moody Atmosphere"
    | "Dmt Art Style"
    | "Doodle Art"
    | "Double Exposure"
    | "Dripping Paint Splatter Art"
    | "Expressionism"
    | "Faded Polaroid Photo"
    | "Fauvism"
    | "Flat 2d Art"
    | "Fortnite Art Style"
    | "Futurism"
    | "Glitchcore"
    | "Glo Fi"
    | "Googie Art Style"
    | "Graffiti Art"
    | "Harlem Renaissance Art"
    | "High Fashion"
    | "Idyllic"
    | "Impressionism"
    | "Infographic Drawing"
    | "Ink Dripping Drawing"
    | "Japanese Ink Drawing"
    | "Knolling Photography"
    | "Light Cheery Atmosphere"
    | "Logo Design"
    | "Luxurious Elegance"
    | "Macro Photography"
    | "Mandola Art"
    | "Marker Drawing"
    | "Medievalism"
    | "Minimalism"
    | "Neo Baroque"
    | "Neo Byzantine"
    | "Neo Futurism"
    | "Neo Impressionism"
    | "Neo Rococo"
    | "Neoclassicism"
    | "Op Art"
    | "Ornate And Intricate"
    | "Pencil Sketch Drawing"
    | "Pop Art 2"
    | "Rococo"
    | "Silhouette Art"
    | "Simple Vector Art"
    | "Sketchup"
    | "Steampunk 2"
    | "Surrealism"
    | "Suprematism"
    | "Terragen"
    | "Tranquil Relaxing Atmosphere"
    | "Sticker Designs"
    | "Vibrant Rim Light"
    | "Volumetric Lighting"
    | "Watercolor 2"
    | "Whimsical And Playful"
    | "Mk Chromolithography"
    | "Mk Cross Processing Print"
    | "Mk Dufaycolor Photograph"
    | "Mk Herbarium"
    | "Mk Punk Collage"
    | "Mk Mosaic"
    | "Mk Van Gogh"
    | "Mk Coloring Book"
    | "Mk Singer Sargent"
    | "Mk Pollock"
    | "Mk Basquiat"
    | "Mk Andy Warhol"
    | "Mk Halftone Print"
    | "Mk Gond Painting"
    | "Mk Albumen Print"
    | "Mk Aquatint Print"
    | "Mk Anthotype Print"
    | "Mk Inuit Carving"
    | "Mk Bromoil Print"
    | "Mk Calotype Print"
    | "Mk Color Sketchnote"
    | "Mk Cibulak Porcelain"
    | "Mk Alcohol Ink Art"
    | "Mk One Line Art"
    | "Mk Blacklight Paint"
    | "Mk Carnival Glass"
    | "Mk Cyanotype Print"
    | "Mk Cross Stitching"
    | "Mk Encaustic Paint"
    | "Mk Embroidery"
    | "Mk Gyotaku"
    | "Mk Luminogram"
    | "Mk Lite Brite Art"
    | "Mk Mokume Gane"
    | "Pebble Art"
    | "Mk Palekh"
    | "Mk Suminagashi"
    | "Mk Scrimshaw"
    | "Mk Shibori"
    | "Mk Vitreous Enamel"
    | "Mk Ukiyo E"
    | "Mk Vintage Airline Poster"
    | "Mk Vintage Travel Poster"
    | "Mk Bauhaus Style"
    | "Mk Afrofuturism"
    | "Mk Atompunk"
    | "Mk Constructivism"
    | "Mk Chicano Art"
    | "Mk De Stijl"
    | "Mk Dayak Art"
    | "Mk Fayum Portrait"
    | "Mk Illuminated Manuscript"
    | "Mk Kalighat Painting"
    | "Mk Madhubani Painting"
    | "Mk Pictorialism"
    | "Mk Pichwai Painting"
    | "Mk Patachitra Painting"
    | "Mk Samoan Art Inspired"
    | "Mk Tlingit Art"
    | "Mk Adnate Style"
    | "Mk Ron English Style"
    | "Mk Shepard Fairey Style"
  >;
  /**
   * You can choose Speed or Quality Default value: `"Extreme Speed"`
   */
  performance?: "Speed" | "Quality" | "Extreme Speed" | "Lightning";
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `4`
   */
  guidance_scale?: number;
  /**
   * The sharpness of the generated image. Use it to control how sharp the generated
   * image should be. Higher value means image and texture are sharper. Default value: `2`
   */
  sharpness?: number;
  /**
   * The size of the generated image. You can choose between some presets or
   * custom height and width that **must be multiples of 8**. Default value: `"1024x1024"`
   */
  aspect_ratio?: string;
  /**
   * Number of images to generate in one request Default value: `1`
   */
  num_images?: number;
  /**
   * The LoRAs to use for the image generation. You can use up to 5 LoRAs
   * and they will be merged together to generate the final image. Default value: `[object Object]`
   */
  loras?: Array<LoraWeight>;
  /**
   * Refiner (SDXL or SD 1.5) Default value: `"None"`
   */
  refiner_model?: "None" | "realisticVisionV60B1_v51VAE.safetensors";
  /**
   * Use 0.4 for SD1.5 realistic models; 0.667 for SD1.5 anime models
   * 0.8 for XL-refiners; or any value for switching two SDXL models. Default value: `0.8`
   */
  refiner_switch?: number;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "png" | "jpeg" | "webp";
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   *
   */
  image_prompt_1: ImagePrompt;
  /**
   *
   */
  image_prompt_2?: ImagePrompt;
  /**
   *
   */
  image_prompt_3?: ImagePrompt;
  /**
   *
   */
  image_prompt_4?: ImagePrompt;
  /**
   * The image to use as a reference for inpainting.
   */
  inpaint_image_url?: string | Blob | File;
  /**
   * The image to use as a mask for the generated image.
   */
  mask_image_url?: string | Blob | File;
  /**
   * The mode to use for inpainting. Default value: `"Inpaint or Outpaint (default)"`
   */
  inpaint_mode?:
    | "Inpaint or Outpaint (default)"
    | "Improve Detail (face, hand, eyes, etc.)"
    | "Modify Content (add objects, change background, etc.)";
  /**
   * Describe what you want to inpaint. Default value: `""`
   */
  inpaint_additional_prompt?: string;
  /**
   * The directions to outpaint. Default value: ``
   */
  outpaint_selections?: Array<"Left" | "Right" | "Top" | "Bottom">;
  /**
   * Mixing Image Prompt and Inpaint
   */
  mixing_image_prompt_and_inpaint?: boolean;
  /**
   * The image to upscale or vary.
   */
  uov_image_url?: string | Blob | File;
  /**
   * The method to use for upscaling or varying. Default value: `"Disabled"`
   */
  uov_method?:
    | "Disabled"
    | "Vary (Subtle)"
    | "Vary (Strong)"
    | "Upscale (1.5x)"
    | "Upscale (2x)"
    | "Upscale (Fast 2x)";
  /**
   * Mixing Image Prompt and Vary/Upscale
   */
  mixing_image_prompt_and_vary_upscale?: boolean;
  /**
   * If set to false, the safety checker will be disabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type FooocusImagePromptOutput = {
  /**
   * The generated image file info.
   */
  images: Array<Image>;
  /**
   * The time taken for the generation process.
   */
  timings: any;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
};
export type FooocusInpaintInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results. Default value: `""`
   */
  prompt?: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The style to use. Default value: `Fooocus Enhance,Fooocus V2,Fooocus Sharp`
   */
  styles?: Array<
    | "Fooocus V2"
    | "Fooocus Enhance"
    | "Fooocus Sharp"
    | "Fooocus Semi Realistic"
    | "Fooocus Masterpiece"
    | "Fooocus Photograph"
    | "Fooocus Negative"
    | "Fooocus Cinematic"
    | "SAI 3D Model"
    | "SAI Analog Film"
    | "SAI Anime"
    | "SAI Cinematic"
    | "SAI Comic Book"
    | "SAI Craft Clay"
    | "SAI Digital Art"
    | "SAI Enhance"
    | "SAI Fantasy Art"
    | "SAI Isometric"
    | "SAI Line Art"
    | "SAI Lowpoly"
    | "SAI Neonpunk"
    | "SAI Origami"
    | "SAI Photographic"
    | "SAI Pixel Art"
    | "SAI Texture"
    | "MRE Cinematic Dynamic"
    | "MRE Spontaneous Picture"
    | "MRE Artistic Vision"
    | "MRE Dark Dream"
    | "MRE Gloomy Art"
    | "MRE Bad Dream"
    | "MRE Underground"
    | "MRE Surreal Painting"
    | "MRE Dynamic Illustration"
    | "MRE Undead Art"
    | "MRE Elemental Art"
    | "MRE Space Art"
    | "MRE Ancient Illustration"
    | "MRE Brave Art"
    | "MRE Heroic Fantasy"
    | "MRE Dark Cyberpunk"
    | "MRE Lyrical Geometry"
    | "MRE Sumi E Symbolic"
    | "MRE Sumi E Detailed"
    | "MRE Manga"
    | "MRE Anime"
    | "MRE Comic"
    | "Ads Advertising"
    | "Ads Automotive"
    | "Ads Corporate"
    | "Ads Fashion Editorial"
    | "Ads Food Photography"
    | "Ads Gourmet Food Photography"
    | "Ads Luxury"
    | "Ads Real Estate"
    | "Ads Retail"
    | "Artstyle Abstract"
    | "Artstyle Abstract Expressionism"
    | "Artstyle Art Deco"
    | "Artstyle Art Nouveau"
    | "Artstyle Constructivist"
    | "Artstyle Cubist"
    | "Artstyle Expressionist"
    | "Artstyle Graffiti"
    | "Artstyle Hyperrealism"
    | "Artstyle Impressionist"
    | "Artstyle Pointillism"
    | "Artstyle Pop Art"
    | "Artstyle Psychedelic"
    | "Artstyle Renaissance"
    | "Artstyle Steampunk"
    | "Artstyle Surrealist"
    | "Artstyle Typography"
    | "Artstyle Watercolor"
    | "Futuristic Biomechanical"
    | "Futuristic Biomechanical Cyberpunk"
    | "Futuristic Cybernetic"
    | "Futuristic Cybernetic Robot"
    | "Futuristic Cyberpunk Cityscape"
    | "Futuristic Futuristic"
    | "Futuristic Retro Cyberpunk"
    | "Futuristic Retro Futurism"
    | "Futuristic Sci Fi"
    | "Futuristic Vaporwave"
    | "Game Bubble Bobble"
    | "Game Cyberpunk Game"
    | "Game Fighting Game"
    | "Game Gta"
    | "Game Mario"
    | "Game Minecraft"
    | "Game Pokemon"
    | "Game Retro Arcade"
    | "Game Retro Game"
    | "Game Rpg Fantasy Game"
    | "Game Strategy Game"
    | "Game Streetfighter"
    | "Game Zelda"
    | "Misc Architectural"
    | "Misc Disco"
    | "Misc Dreamscape"
    | "Misc Dystopian"
    | "Misc Fairy Tale"
    | "Misc Gothic"
    | "Misc Grunge"
    | "Misc Horror"
    | "Misc Kawaii"
    | "Misc Lovecraftian"
    | "Misc Macabre"
    | "Misc Manga"
    | "Misc Metropolis"
    | "Misc Minimalist"
    | "Misc Monochrome"
    | "Misc Nautical"
    | "Misc Space"
    | "Misc Stained Glass"
    | "Misc Techwear Fashion"
    | "Misc Tribal"
    | "Misc Zentangle"
    | "Papercraft Collage"
    | "Papercraft Flat Papercut"
    | "Papercraft Kirigami"
    | "Papercraft Paper Mache"
    | "Papercraft Paper Quilling"
    | "Papercraft Papercut Collage"
    | "Papercraft Papercut Shadow Box"
    | "Papercraft Stacked Papercut"
    | "Papercraft Thick Layered Papercut"
    | "Photo Alien"
    | "Photo Film Noir"
    | "Photo Glamour"
    | "Photo Hdr"
    | "Photo Iphone Photographic"
    | "Photo Long Exposure"
    | "Photo Neon Noir"
    | "Photo Silhouette"
    | "Photo Tilt Shift"
    | "Cinematic Diva"
    | "Abstract Expressionism"
    | "Academia"
    | "Action Figure"
    | "Adorable 3D Character"
    | "Adorable Kawaii"
    | "Art Deco"
    | "Art Nouveau"
    | "Astral Aura"
    | "Avant Garde"
    | "Baroque"
    | "Bauhaus Style Poster"
    | "Blueprint Schematic Drawing"
    | "Caricature"
    | "Cel Shaded Art"
    | "Character Design Sheet"
    | "Classicism Art"
    | "Color Field Painting"
    | "Colored Pencil Art"
    | "Conceptual Art"
    | "Constructivism"
    | "Cubism"
    | "Dadaism"
    | "Dark Fantasy"
    | "Dark Moody Atmosphere"
    | "Dmt Art Style"
    | "Doodle Art"
    | "Double Exposure"
    | "Dripping Paint Splatter Art"
    | "Expressionism"
    | "Faded Polaroid Photo"
    | "Fauvism"
    | "Flat 2d Art"
    | "Fortnite Art Style"
    | "Futurism"
    | "Glitchcore"
    | "Glo Fi"
    | "Googie Art Style"
    | "Graffiti Art"
    | "Harlem Renaissance Art"
    | "High Fashion"
    | "Idyllic"
    | "Impressionism"
    | "Infographic Drawing"
    | "Ink Dripping Drawing"
    | "Japanese Ink Drawing"
    | "Knolling Photography"
    | "Light Cheery Atmosphere"
    | "Logo Design"
    | "Luxurious Elegance"
    | "Macro Photography"
    | "Mandola Art"
    | "Marker Drawing"
    | "Medievalism"
    | "Minimalism"
    | "Neo Baroque"
    | "Neo Byzantine"
    | "Neo Futurism"
    | "Neo Impressionism"
    | "Neo Rococo"
    | "Neoclassicism"
    | "Op Art"
    | "Ornate And Intricate"
    | "Pencil Sketch Drawing"
    | "Pop Art 2"
    | "Rococo"
    | "Silhouette Art"
    | "Simple Vector Art"
    | "Sketchup"
    | "Steampunk 2"
    | "Surrealism"
    | "Suprematism"
    | "Terragen"
    | "Tranquil Relaxing Atmosphere"
    | "Sticker Designs"
    | "Vibrant Rim Light"
    | "Volumetric Lighting"
    | "Watercolor 2"
    | "Whimsical And Playful"
    | "Mk Chromolithography"
    | "Mk Cross Processing Print"
    | "Mk Dufaycolor Photograph"
    | "Mk Herbarium"
    | "Mk Punk Collage"
    | "Mk Mosaic"
    | "Mk Van Gogh"
    | "Mk Coloring Book"
    | "Mk Singer Sargent"
    | "Mk Pollock"
    | "Mk Basquiat"
    | "Mk Andy Warhol"
    | "Mk Halftone Print"
    | "Mk Gond Painting"
    | "Mk Albumen Print"
    | "Mk Aquatint Print"
    | "Mk Anthotype Print"
    | "Mk Inuit Carving"
    | "Mk Bromoil Print"
    | "Mk Calotype Print"
    | "Mk Color Sketchnote"
    | "Mk Cibulak Porcelain"
    | "Mk Alcohol Ink Art"
    | "Mk One Line Art"
    | "Mk Blacklight Paint"
    | "Mk Carnival Glass"
    | "Mk Cyanotype Print"
    | "Mk Cross Stitching"
    | "Mk Encaustic Paint"
    | "Mk Embroidery"
    | "Mk Gyotaku"
    | "Mk Luminogram"
    | "Mk Lite Brite Art"
    | "Mk Mokume Gane"
    | "Pebble Art"
    | "Mk Palekh"
    | "Mk Suminagashi"
    | "Mk Scrimshaw"
    | "Mk Shibori"
    | "Mk Vitreous Enamel"
    | "Mk Ukiyo E"
    | "Mk Vintage Airline Poster"
    | "Mk Vintage Travel Poster"
    | "Mk Bauhaus Style"
    | "Mk Afrofuturism"
    | "Mk Atompunk"
    | "Mk Constructivism"
    | "Mk Chicano Art"
    | "Mk De Stijl"
    | "Mk Dayak Art"
    | "Mk Fayum Portrait"
    | "Mk Illuminated Manuscript"
    | "Mk Kalighat Painting"
    | "Mk Madhubani Painting"
    | "Mk Pictorialism"
    | "Mk Pichwai Painting"
    | "Mk Patachitra Painting"
    | "Mk Samoan Art Inspired"
    | "Mk Tlingit Art"
    | "Mk Adnate Style"
    | "Mk Ron English Style"
    | "Mk Shepard Fairey Style"
  >;
  /**
   * You can choose Speed or Quality Default value: `"Extreme Speed"`
   */
  performance?: "Speed" | "Quality" | "Extreme Speed" | "Lightning";
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `4`
   */
  guidance_scale?: number;
  /**
   * The sharpness of the generated image. Use it to control how sharp the generated
   * image should be. Higher value means image and texture are sharper. Default value: `2`
   */
  sharpness?: number;
  /**
   * The size of the generated image. You can choose between some presets or
   * custom height and width that **must be multiples of 8**. Default value: `"1024x1024"`
   */
  aspect_ratio?: string;
  /**
   * Number of images to generate in one request Default value: `1`
   */
  num_images?: number;
  /**
   * The LoRAs to use for the image generation. You can use up to 5 LoRAs
   * and they will be merged together to generate the final image. Default value: `[object Object]`
   */
  loras?: Array<LoraWeight>;
  /**
   * Refiner (SDXL or SD 1.5) Default value: `"None"`
   */
  refiner_model?: "None" | "realisticVisionV60B1_v51VAE.safetensors";
  /**
   * Use 0.4 for SD1.5 realistic models; 0.667 for SD1.5 anime models
   * 0.8 for XL-refiners; or any value for switching two SDXL models. Default value: `0.8`
   */
  refiner_switch?: number;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "png" | "jpeg" | "webp";
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The image to use as a reference for inpainting.
   */
  inpaint_image_url: string | Blob | File;
  /**
   * The image to use as a mask for the generated image.
   */
  mask_image_url?: string | Blob | File;
  /**
   * The mode to use for inpainting. Default value: `"Inpaint or Outpaint (default)"`
   */
  inpaint_mode?:
    | "Inpaint or Outpaint (default)"
    | "Improve Detail (face, hand, eyes, etc.)"
    | "Modify Content (add objects, change background, etc.)";
  /**
   * Describe what you want to inpaint. Default value: `""`
   */
  inpaint_additional_prompt?: string;
  /**
   * The directions to outpaint. Default value: ``
   */
  outpaint_selections?: Array<"Left" | "Right" | "Top" | "Bottom">;
  /**
   * If set to true, the advanced inpaint options ('inpaint_disable_initial_latent',
   * 'inpaint_engine', 'inpaint_strength', 'inpaint_respective_field',
   * 'inpaint_erode_or_dilate') will be overridden.
   * Otherwise, the default values will be used.
   */
  override_inpaint_options?: boolean;
  /**
   * If set to true, the initial preprocessing will be disabled.
   */
  inpaint_disable_initial_latent?: boolean;
  /**
   * Version of Fooocus inpaint model Default value: `"v2.6"`
   */
  inpaint_engine?: "None" | "v1" | "v2.5" | "v2.6";
  /**
   * Same as the denoising strength in A1111 inpaint. Only used in inpaint, not
   * used in outpaint. (Outpaint always use 1.0) Default value: `1`
   */
  inpaint_strength?: number;
  /**
   * The area to inpaint. Value 0 is same as "Only Masked" in A1111. Value 1 is
   * same as "Whole Image" in A1111. Only used in inpaint, not used in outpaint.
   * (Outpaint always use 1.0) Default value: `0.618`
   */
  inpaint_respective_field?: number;
  /**
   * Positive value will make white area in the mask larger, negative value will
   * make white area smaller. (default is 0, always process before any mask
   * invert)
   */
  inpaint_erode_or_dilate?: number;
  /**
   * If set to true, the mask will be inverted.
   */
  invert_mask?: boolean;
  /**
   *
   */
  image_prompt_1?: ImagePrompt;
  /**
   *
   */
  image_prompt_2?: ImagePrompt;
  /**
   *
   */
  image_prompt_3?: ImagePrompt;
  /**
   *
   */
  image_prompt_4?: ImagePrompt;
  /**
   * Mixing Image Prompt and Inpaint
   */
  mixing_image_prompt_and_inpaint?: boolean;
  /**
   * If set to false, the safety checker will be disabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type FooocusInpaintOutput = {
  /**
   * The generated image file info.
   */
  images: Array<Image>;
  /**
   * The time taken for the generation process.
   */
  timings: any;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
};
export type FooocusInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results. Default value: `""`
   */
  prompt?: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The style to use. Default value: `Fooocus Enhance,Fooocus V2,Fooocus Sharp`
   */
  styles?: Array<
    | "Fooocus V2"
    | "Fooocus Enhance"
    | "Fooocus Sharp"
    | "Fooocus Semi Realistic"
    | "Fooocus Masterpiece"
    | "Fooocus Photograph"
    | "Fooocus Negative"
    | "Fooocus Cinematic"
    | "SAI 3D Model"
    | "SAI Analog Film"
    | "SAI Anime"
    | "SAI Cinematic"
    | "SAI Comic Book"
    | "SAI Craft Clay"
    | "SAI Digital Art"
    | "SAI Enhance"
    | "SAI Fantasy Art"
    | "SAI Isometric"
    | "SAI Line Art"
    | "SAI Lowpoly"
    | "SAI Neonpunk"
    | "SAI Origami"
    | "SAI Photographic"
    | "SAI Pixel Art"
    | "SAI Texture"
    | "MRE Cinematic Dynamic"
    | "MRE Spontaneous Picture"
    | "MRE Artistic Vision"
    | "MRE Dark Dream"
    | "MRE Gloomy Art"
    | "MRE Bad Dream"
    | "MRE Underground"
    | "MRE Surreal Painting"
    | "MRE Dynamic Illustration"
    | "MRE Undead Art"
    | "MRE Elemental Art"
    | "MRE Space Art"
    | "MRE Ancient Illustration"
    | "MRE Brave Art"
    | "MRE Heroic Fantasy"
    | "MRE Dark Cyberpunk"
    | "MRE Lyrical Geometry"
    | "MRE Sumi E Symbolic"
    | "MRE Sumi E Detailed"
    | "MRE Manga"
    | "MRE Anime"
    | "MRE Comic"
    | "Ads Advertising"
    | "Ads Automotive"
    | "Ads Corporate"
    | "Ads Fashion Editorial"
    | "Ads Food Photography"
    | "Ads Gourmet Food Photography"
    | "Ads Luxury"
    | "Ads Real Estate"
    | "Ads Retail"
    | "Artstyle Abstract"
    | "Artstyle Abstract Expressionism"
    | "Artstyle Art Deco"
    | "Artstyle Art Nouveau"
    | "Artstyle Constructivist"
    | "Artstyle Cubist"
    | "Artstyle Expressionist"
    | "Artstyle Graffiti"
    | "Artstyle Hyperrealism"
    | "Artstyle Impressionist"
    | "Artstyle Pointillism"
    | "Artstyle Pop Art"
    | "Artstyle Psychedelic"
    | "Artstyle Renaissance"
    | "Artstyle Steampunk"
    | "Artstyle Surrealist"
    | "Artstyle Typography"
    | "Artstyle Watercolor"
    | "Futuristic Biomechanical"
    | "Futuristic Biomechanical Cyberpunk"
    | "Futuristic Cybernetic"
    | "Futuristic Cybernetic Robot"
    | "Futuristic Cyberpunk Cityscape"
    | "Futuristic Futuristic"
    | "Futuristic Retro Cyberpunk"
    | "Futuristic Retro Futurism"
    | "Futuristic Sci Fi"
    | "Futuristic Vaporwave"
    | "Game Bubble Bobble"
    | "Game Cyberpunk Game"
    | "Game Fighting Game"
    | "Game Gta"
    | "Game Mario"
    | "Game Minecraft"
    | "Game Pokemon"
    | "Game Retro Arcade"
    | "Game Retro Game"
    | "Game Rpg Fantasy Game"
    | "Game Strategy Game"
    | "Game Streetfighter"
    | "Game Zelda"
    | "Misc Architectural"
    | "Misc Disco"
    | "Misc Dreamscape"
    | "Misc Dystopian"
    | "Misc Fairy Tale"
    | "Misc Gothic"
    | "Misc Grunge"
    | "Misc Horror"
    | "Misc Kawaii"
    | "Misc Lovecraftian"
    | "Misc Macabre"
    | "Misc Manga"
    | "Misc Metropolis"
    | "Misc Minimalist"
    | "Misc Monochrome"
    | "Misc Nautical"
    | "Misc Space"
    | "Misc Stained Glass"
    | "Misc Techwear Fashion"
    | "Misc Tribal"
    | "Misc Zentangle"
    | "Papercraft Collage"
    | "Papercraft Flat Papercut"
    | "Papercraft Kirigami"
    | "Papercraft Paper Mache"
    | "Papercraft Paper Quilling"
    | "Papercraft Papercut Collage"
    | "Papercraft Papercut Shadow Box"
    | "Papercraft Stacked Papercut"
    | "Papercraft Thick Layered Papercut"
    | "Photo Alien"
    | "Photo Film Noir"
    | "Photo Glamour"
    | "Photo Hdr"
    | "Photo Iphone Photographic"
    | "Photo Long Exposure"
    | "Photo Neon Noir"
    | "Photo Silhouette"
    | "Photo Tilt Shift"
    | "Cinematic Diva"
    | "Abstract Expressionism"
    | "Academia"
    | "Action Figure"
    | "Adorable 3D Character"
    | "Adorable Kawaii"
    | "Art Deco"
    | "Art Nouveau"
    | "Astral Aura"
    | "Avant Garde"
    | "Baroque"
    | "Bauhaus Style Poster"
    | "Blueprint Schematic Drawing"
    | "Caricature"
    | "Cel Shaded Art"
    | "Character Design Sheet"
    | "Classicism Art"
    | "Color Field Painting"
    | "Colored Pencil Art"
    | "Conceptual Art"
    | "Constructivism"
    | "Cubism"
    | "Dadaism"
    | "Dark Fantasy"
    | "Dark Moody Atmosphere"
    | "Dmt Art Style"
    | "Doodle Art"
    | "Double Exposure"
    | "Dripping Paint Splatter Art"
    | "Expressionism"
    | "Faded Polaroid Photo"
    | "Fauvism"
    | "Flat 2d Art"
    | "Fortnite Art Style"
    | "Futurism"
    | "Glitchcore"
    | "Glo Fi"
    | "Googie Art Style"
    | "Graffiti Art"
    | "Harlem Renaissance Art"
    | "High Fashion"
    | "Idyllic"
    | "Impressionism"
    | "Infographic Drawing"
    | "Ink Dripping Drawing"
    | "Japanese Ink Drawing"
    | "Knolling Photography"
    | "Light Cheery Atmosphere"
    | "Logo Design"
    | "Luxurious Elegance"
    | "Macro Photography"
    | "Mandola Art"
    | "Marker Drawing"
    | "Medievalism"
    | "Minimalism"
    | "Neo Baroque"
    | "Neo Byzantine"
    | "Neo Futurism"
    | "Neo Impressionism"
    | "Neo Rococo"
    | "Neoclassicism"
    | "Op Art"
    | "Ornate And Intricate"
    | "Pencil Sketch Drawing"
    | "Pop Art 2"
    | "Rococo"
    | "Silhouette Art"
    | "Simple Vector Art"
    | "Sketchup"
    | "Steampunk 2"
    | "Surrealism"
    | "Suprematism"
    | "Terragen"
    | "Tranquil Relaxing Atmosphere"
    | "Sticker Designs"
    | "Vibrant Rim Light"
    | "Volumetric Lighting"
    | "Watercolor 2"
    | "Whimsical And Playful"
    | "Mk Chromolithography"
    | "Mk Cross Processing Print"
    | "Mk Dufaycolor Photograph"
    | "Mk Herbarium"
    | "Mk Punk Collage"
    | "Mk Mosaic"
    | "Mk Van Gogh"
    | "Mk Coloring Book"
    | "Mk Singer Sargent"
    | "Mk Pollock"
    | "Mk Basquiat"
    | "Mk Andy Warhol"
    | "Mk Halftone Print"
    | "Mk Gond Painting"
    | "Mk Albumen Print"
    | "Mk Aquatint Print"
    | "Mk Anthotype Print"
    | "Mk Inuit Carving"
    | "Mk Bromoil Print"
    | "Mk Calotype Print"
    | "Mk Color Sketchnote"
    | "Mk Cibulak Porcelain"
    | "Mk Alcohol Ink Art"
    | "Mk One Line Art"
    | "Mk Blacklight Paint"
    | "Mk Carnival Glass"
    | "Mk Cyanotype Print"
    | "Mk Cross Stitching"
    | "Mk Encaustic Paint"
    | "Mk Embroidery"
    | "Mk Gyotaku"
    | "Mk Luminogram"
    | "Mk Lite Brite Art"
    | "Mk Mokume Gane"
    | "Pebble Art"
    | "Mk Palekh"
    | "Mk Suminagashi"
    | "Mk Scrimshaw"
    | "Mk Shibori"
    | "Mk Vitreous Enamel"
    | "Mk Ukiyo E"
    | "Mk Vintage Airline Poster"
    | "Mk Vintage Travel Poster"
    | "Mk Bauhaus Style"
    | "Mk Afrofuturism"
    | "Mk Atompunk"
    | "Mk Constructivism"
    | "Mk Chicano Art"
    | "Mk De Stijl"
    | "Mk Dayak Art"
    | "Mk Fayum Portrait"
    | "Mk Illuminated Manuscript"
    | "Mk Kalighat Painting"
    | "Mk Madhubani Painting"
    | "Mk Pictorialism"
    | "Mk Pichwai Painting"
    | "Mk Patachitra Painting"
    | "Mk Samoan Art Inspired"
    | "Mk Tlingit Art"
    | "Mk Adnate Style"
    | "Mk Ron English Style"
    | "Mk Shepard Fairey Style"
  >;
  /**
   * You can choose Speed or Quality Default value: `"Extreme Speed"`
   */
  performance?: "Speed" | "Quality" | "Extreme Speed" | "Lightning";
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `4`
   */
  guidance_scale?: number;
  /**
   * The sharpness of the generated image. Use it to control how sharp the generated
   * image should be. Higher value means image and texture are sharper. Default value: `2`
   */
  sharpness?: number;
  /**
   * The size of the generated image. You can choose between some presets or
   * custom height and width that **must be multiples of 8**. Default value: `"1024x1024"`
   */
  aspect_ratio?: string;
  /**
   * Number of images to generate in one request Default value: `1`
   */
  num_images?: number;
  /**
   * The LoRAs to use for the image generation. You can use up to 5 LoRAs
   * and they will be merged together to generate the final image. Default value: `[object Object]`
   */
  loras?: Array<LoraWeight>;
  /**
   * Refiner (SDXL or SD 1.5) Default value: `"None"`
   */
  refiner_model?: "None" | "realisticVisionV60B1_v51VAE.safetensors";
  /**
   * Use 0.4 for SD1.5 realistic models; 0.667 for SD1.5 anime models
   * 0.8 for XL-refiners; or any value for switching two SDXL models. Default value: `0.8`
   */
  refiner_switch?: number;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "png" | "jpeg" | "webp";
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The image to use as a reference for the generated image.
   */
  control_image_url?: string | Blob | File;
  /**
   * The type of image control Default value: `"PyraCanny"`
   */
  control_type?: "ImagePrompt" | "PyraCanny" | "CPDS" | "FaceSwap";
  /**
   * The strength of the control image. Use it to control how much the generated image
   * should look like the control image. Default value: `1`
   */
  control_image_weight?: number;
  /**
   * The stop at value of the control image. Use it to control how much the generated image
   * should look like the control image. Default value: `1`
   */
  control_image_stop_at?: number;
  /**
   * The image to use as a reference for inpainting.
   */
  inpaint_image_url?: string | Blob | File;
  /**
   * The image to use as a mask for the generated image.
   */
  mask_image_url?: string | Blob | File;
  /**
   *
   */
  mixing_image_prompt_and_inpaint?: boolean;
  /**
   * If set to false, the safety checker will be disabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type FooocusLegacyInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results. Default value: `""`
   */
  prompt?: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The style to use. Default value: `Fooocus Enhance,Fooocus V2,Fooocus Sharp`
   */
  styles?: Array<
    | "Fooocus V2"
    | "Fooocus Enhance"
    | "Fooocus Sharp"
    | "Fooocus Semi Realistic"
    | "Fooocus Masterpiece"
    | "Fooocus Photograph"
    | "Fooocus Negative"
    | "Fooocus Cinematic"
    | "SAI 3D Model"
    | "SAI Analog Film"
    | "SAI Anime"
    | "SAI Cinematic"
    | "SAI Comic Book"
    | "SAI Craft Clay"
    | "SAI Digital Art"
    | "SAI Enhance"
    | "SAI Fantasy Art"
    | "SAI Isometric"
    | "SAI Line Art"
    | "SAI Lowpoly"
    | "SAI Neonpunk"
    | "SAI Origami"
    | "SAI Photographic"
    | "SAI Pixel Art"
    | "SAI Texture"
    | "MRE Cinematic Dynamic"
    | "MRE Spontaneous Picture"
    | "MRE Artistic Vision"
    | "MRE Dark Dream"
    | "MRE Gloomy Art"
    | "MRE Bad Dream"
    | "MRE Underground"
    | "MRE Surreal Painting"
    | "MRE Dynamic Illustration"
    | "MRE Undead Art"
    | "MRE Elemental Art"
    | "MRE Space Art"
    | "MRE Ancient Illustration"
    | "MRE Brave Art"
    | "MRE Heroic Fantasy"
    | "MRE Dark Cyberpunk"
    | "MRE Lyrical Geometry"
    | "MRE Sumi E Symbolic"
    | "MRE Sumi E Detailed"
    | "MRE Manga"
    | "MRE Anime"
    | "MRE Comic"
    | "Ads Advertising"
    | "Ads Automotive"
    | "Ads Corporate"
    | "Ads Fashion Editorial"
    | "Ads Food Photography"
    | "Ads Gourmet Food Photography"
    | "Ads Luxury"
    | "Ads Real Estate"
    | "Ads Retail"
    | "Artstyle Abstract"
    | "Artstyle Abstract Expressionism"
    | "Artstyle Art Deco"
    | "Artstyle Art Nouveau"
    | "Artstyle Constructivist"
    | "Artstyle Cubist"
    | "Artstyle Expressionist"
    | "Artstyle Graffiti"
    | "Artstyle Hyperrealism"
    | "Artstyle Impressionist"
    | "Artstyle Pointillism"
    | "Artstyle Pop Art"
    | "Artstyle Psychedelic"
    | "Artstyle Renaissance"
    | "Artstyle Steampunk"
    | "Artstyle Surrealist"
    | "Artstyle Typography"
    | "Artstyle Watercolor"
    | "Futuristic Biomechanical"
    | "Futuristic Biomechanical Cyberpunk"
    | "Futuristic Cybernetic"
    | "Futuristic Cybernetic Robot"
    | "Futuristic Cyberpunk Cityscape"
    | "Futuristic Futuristic"
    | "Futuristic Retro Cyberpunk"
    | "Futuristic Retro Futurism"
    | "Futuristic Sci Fi"
    | "Futuristic Vaporwave"
    | "Game Bubble Bobble"
    | "Game Cyberpunk Game"
    | "Game Fighting Game"
    | "Game Gta"
    | "Game Mario"
    | "Game Minecraft"
    | "Game Pokemon"
    | "Game Retro Arcade"
    | "Game Retro Game"
    | "Game Rpg Fantasy Game"
    | "Game Strategy Game"
    | "Game Streetfighter"
    | "Game Zelda"
    | "Misc Architectural"
    | "Misc Disco"
    | "Misc Dreamscape"
    | "Misc Dystopian"
    | "Misc Fairy Tale"
    | "Misc Gothic"
    | "Misc Grunge"
    | "Misc Horror"
    | "Misc Kawaii"
    | "Misc Lovecraftian"
    | "Misc Macabre"
    | "Misc Manga"
    | "Misc Metropolis"
    | "Misc Minimalist"
    | "Misc Monochrome"
    | "Misc Nautical"
    | "Misc Space"
    | "Misc Stained Glass"
    | "Misc Techwear Fashion"
    | "Misc Tribal"
    | "Misc Zentangle"
    | "Papercraft Collage"
    | "Papercraft Flat Papercut"
    | "Papercraft Kirigami"
    | "Papercraft Paper Mache"
    | "Papercraft Paper Quilling"
    | "Papercraft Papercut Collage"
    | "Papercraft Papercut Shadow Box"
    | "Papercraft Stacked Papercut"
    | "Papercraft Thick Layered Papercut"
    | "Photo Alien"
    | "Photo Film Noir"
    | "Photo Glamour"
    | "Photo Hdr"
    | "Photo Iphone Photographic"
    | "Photo Long Exposure"
    | "Photo Neon Noir"
    | "Photo Silhouette"
    | "Photo Tilt Shift"
    | "Cinematic Diva"
    | "Abstract Expressionism"
    | "Academia"
    | "Action Figure"
    | "Adorable 3D Character"
    | "Adorable Kawaii"
    | "Art Deco"
    | "Art Nouveau"
    | "Astral Aura"
    | "Avant Garde"
    | "Baroque"
    | "Bauhaus Style Poster"
    | "Blueprint Schematic Drawing"
    | "Caricature"
    | "Cel Shaded Art"
    | "Character Design Sheet"
    | "Classicism Art"
    | "Color Field Painting"
    | "Colored Pencil Art"
    | "Conceptual Art"
    | "Constructivism"
    | "Cubism"
    | "Dadaism"
    | "Dark Fantasy"
    | "Dark Moody Atmosphere"
    | "Dmt Art Style"
    | "Doodle Art"
    | "Double Exposure"
    | "Dripping Paint Splatter Art"
    | "Expressionism"
    | "Faded Polaroid Photo"
    | "Fauvism"
    | "Flat 2d Art"
    | "Fortnite Art Style"
    | "Futurism"
    | "Glitchcore"
    | "Glo Fi"
    | "Googie Art Style"
    | "Graffiti Art"
    | "Harlem Renaissance Art"
    | "High Fashion"
    | "Idyllic"
    | "Impressionism"
    | "Infographic Drawing"
    | "Ink Dripping Drawing"
    | "Japanese Ink Drawing"
    | "Knolling Photography"
    | "Light Cheery Atmosphere"
    | "Logo Design"
    | "Luxurious Elegance"
    | "Macro Photography"
    | "Mandola Art"
    | "Marker Drawing"
    | "Medievalism"
    | "Minimalism"
    | "Neo Baroque"
    | "Neo Byzantine"
    | "Neo Futurism"
    | "Neo Impressionism"
    | "Neo Rococo"
    | "Neoclassicism"
    | "Op Art"
    | "Ornate And Intricate"
    | "Pencil Sketch Drawing"
    | "Pop Art 2"
    | "Rococo"
    | "Silhouette Art"
    | "Simple Vector Art"
    | "Sketchup"
    | "Steampunk 2"
    | "Surrealism"
    | "Suprematism"
    | "Terragen"
    | "Tranquil Relaxing Atmosphere"
    | "Sticker Designs"
    | "Vibrant Rim Light"
    | "Volumetric Lighting"
    | "Watercolor 2"
    | "Whimsical And Playful"
    | "Mk Chromolithography"
    | "Mk Cross Processing Print"
    | "Mk Dufaycolor Photograph"
    | "Mk Herbarium"
    | "Mk Punk Collage"
    | "Mk Mosaic"
    | "Mk Van Gogh"
    | "Mk Coloring Book"
    | "Mk Singer Sargent"
    | "Mk Pollock"
    | "Mk Basquiat"
    | "Mk Andy Warhol"
    | "Mk Halftone Print"
    | "Mk Gond Painting"
    | "Mk Albumen Print"
    | "Mk Aquatint Print"
    | "Mk Anthotype Print"
    | "Mk Inuit Carving"
    | "Mk Bromoil Print"
    | "Mk Calotype Print"
    | "Mk Color Sketchnote"
    | "Mk Cibulak Porcelain"
    | "Mk Alcohol Ink Art"
    | "Mk One Line Art"
    | "Mk Blacklight Paint"
    | "Mk Carnival Glass"
    | "Mk Cyanotype Print"
    | "Mk Cross Stitching"
    | "Mk Encaustic Paint"
    | "Mk Embroidery"
    | "Mk Gyotaku"
    | "Mk Luminogram"
    | "Mk Lite Brite Art"
    | "Mk Mokume Gane"
    | "Pebble Art"
    | "Mk Palekh"
    | "Mk Suminagashi"
    | "Mk Scrimshaw"
    | "Mk Shibori"
    | "Mk Vitreous Enamel"
    | "Mk Ukiyo E"
    | "Mk Vintage Airline Poster"
    | "Mk Vintage Travel Poster"
    | "Mk Bauhaus Style"
    | "Mk Afrofuturism"
    | "Mk Atompunk"
    | "Mk Constructivism"
    | "Mk Chicano Art"
    | "Mk De Stijl"
    | "Mk Dayak Art"
    | "Mk Fayum Portrait"
    | "Mk Illuminated Manuscript"
    | "Mk Kalighat Painting"
    | "Mk Madhubani Painting"
    | "Mk Pictorialism"
    | "Mk Pichwai Painting"
    | "Mk Patachitra Painting"
    | "Mk Samoan Art Inspired"
    | "Mk Tlingit Art"
    | "Mk Adnate Style"
    | "Mk Ron English Style"
    | "Mk Shepard Fairey Style"
  >;
  /**
   * You can choose Speed or Quality Default value: `"Extreme Speed"`
   */
  performance?: "Speed" | "Quality" | "Extreme Speed" | "Lightning";
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `4`
   */
  guidance_scale?: number;
  /**
   * The sharpness of the generated image. Use it to control how sharp the generated
   * image should be. Higher value means image and texture are sharper. Default value: `2`
   */
  sharpness?: number;
  /**
   * The size of the generated image. You can choose between some presets or
   * custom height and width that **must be multiples of 8**. Default value: `"1024x1024"`
   */
  aspect_ratio?: string;
  /**
   * Number of images to generate in one request Default value: `1`
   */
  num_images?: number;
  /**
   * The LoRAs to use for the image generation. You can use up to 5 LoRAs
   * and they will be merged together to generate the final image. Default value: `[object Object]`
   */
  loras?: Array<LoraWeight>;
  /**
   * Refiner (SDXL or SD 1.5) Default value: `"None"`
   */
  refiner_model?: "None" | "realisticVisionV60B1_v51VAE.safetensors";
  /**
   * Use 0.4 for SD1.5 realistic models; 0.667 for SD1.5 anime models
   * 0.8 for XL-refiners; or any value for switching two SDXL models. Default value: `0.8`
   */
  refiner_switch?: number;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "png" | "jpeg" | "webp";
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The image to use as a reference for the generated image.
   */
  control_image_url?: string | Blob | File;
  /**
   * The type of image control Default value: `"PyraCanny"`
   */
  control_type?: "ImagePrompt" | "PyraCanny" | "CPDS" | "FaceSwap";
  /**
   * The strength of the control image. Use it to control how much the generated image
   * should look like the control image. Default value: `1`
   */
  control_image_weight?: number;
  /**
   * The stop at value of the control image. Use it to control how much the generated image
   * should look like the control image. Default value: `1`
   */
  control_image_stop_at?: number;
  /**
   * The image to use as a reference for inpainting.
   */
  inpaint_image_url?: string | Blob | File;
  /**
   * The image to use as a mask for the generated image.
   */
  mask_image_url?: string | Blob | File;
  /**
   *
   */
  mixing_image_prompt_and_inpaint?: boolean;
  /**
   * If set to false, the safety checker will be disabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type FooocusOutput = {
  /**
   * The generated image file info.
   */
  images: Array<Image>;
  /**
   * The time taken for the generation process.
   */
  timings: any;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
};
export type FooocusUpscaleOrVaryInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results. Default value: `""`
   */
  prompt?: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The style to use. Default value: `Fooocus Enhance,Fooocus V2,Fooocus Sharp`
   */
  styles?: Array<
    | "Fooocus V2"
    | "Fooocus Enhance"
    | "Fooocus Sharp"
    | "Fooocus Semi Realistic"
    | "Fooocus Masterpiece"
    | "Fooocus Photograph"
    | "Fooocus Negative"
    | "Fooocus Cinematic"
    | "SAI 3D Model"
    | "SAI Analog Film"
    | "SAI Anime"
    | "SAI Cinematic"
    | "SAI Comic Book"
    | "SAI Craft Clay"
    | "SAI Digital Art"
    | "SAI Enhance"
    | "SAI Fantasy Art"
    | "SAI Isometric"
    | "SAI Line Art"
    | "SAI Lowpoly"
    | "SAI Neonpunk"
    | "SAI Origami"
    | "SAI Photographic"
    | "SAI Pixel Art"
    | "SAI Texture"
    | "MRE Cinematic Dynamic"
    | "MRE Spontaneous Picture"
    | "MRE Artistic Vision"
    | "MRE Dark Dream"
    | "MRE Gloomy Art"
    | "MRE Bad Dream"
    | "MRE Underground"
    | "MRE Surreal Painting"
    | "MRE Dynamic Illustration"
    | "MRE Undead Art"
    | "MRE Elemental Art"
    | "MRE Space Art"
    | "MRE Ancient Illustration"
    | "MRE Brave Art"
    | "MRE Heroic Fantasy"
    | "MRE Dark Cyberpunk"
    | "MRE Lyrical Geometry"
    | "MRE Sumi E Symbolic"
    | "MRE Sumi E Detailed"
    | "MRE Manga"
    | "MRE Anime"
    | "MRE Comic"
    | "Ads Advertising"
    | "Ads Automotive"
    | "Ads Corporate"
    | "Ads Fashion Editorial"
    | "Ads Food Photography"
    | "Ads Gourmet Food Photography"
    | "Ads Luxury"
    | "Ads Real Estate"
    | "Ads Retail"
    | "Artstyle Abstract"
    | "Artstyle Abstract Expressionism"
    | "Artstyle Art Deco"
    | "Artstyle Art Nouveau"
    | "Artstyle Constructivist"
    | "Artstyle Cubist"
    | "Artstyle Expressionist"
    | "Artstyle Graffiti"
    | "Artstyle Hyperrealism"
    | "Artstyle Impressionist"
    | "Artstyle Pointillism"
    | "Artstyle Pop Art"
    | "Artstyle Psychedelic"
    | "Artstyle Renaissance"
    | "Artstyle Steampunk"
    | "Artstyle Surrealist"
    | "Artstyle Typography"
    | "Artstyle Watercolor"
    | "Futuristic Biomechanical"
    | "Futuristic Biomechanical Cyberpunk"
    | "Futuristic Cybernetic"
    | "Futuristic Cybernetic Robot"
    | "Futuristic Cyberpunk Cityscape"
    | "Futuristic Futuristic"
    | "Futuristic Retro Cyberpunk"
    | "Futuristic Retro Futurism"
    | "Futuristic Sci Fi"
    | "Futuristic Vaporwave"
    | "Game Bubble Bobble"
    | "Game Cyberpunk Game"
    | "Game Fighting Game"
    | "Game Gta"
    | "Game Mario"
    | "Game Minecraft"
    | "Game Pokemon"
    | "Game Retro Arcade"
    | "Game Retro Game"
    | "Game Rpg Fantasy Game"
    | "Game Strategy Game"
    | "Game Streetfighter"
    | "Game Zelda"
    | "Misc Architectural"
    | "Misc Disco"
    | "Misc Dreamscape"
    | "Misc Dystopian"
    | "Misc Fairy Tale"
    | "Misc Gothic"
    | "Misc Grunge"
    | "Misc Horror"
    | "Misc Kawaii"
    | "Misc Lovecraftian"
    | "Misc Macabre"
    | "Misc Manga"
    | "Misc Metropolis"
    | "Misc Minimalist"
    | "Misc Monochrome"
    | "Misc Nautical"
    | "Misc Space"
    | "Misc Stained Glass"
    | "Misc Techwear Fashion"
    | "Misc Tribal"
    | "Misc Zentangle"
    | "Papercraft Collage"
    | "Papercraft Flat Papercut"
    | "Papercraft Kirigami"
    | "Papercraft Paper Mache"
    | "Papercraft Paper Quilling"
    | "Papercraft Papercut Collage"
    | "Papercraft Papercut Shadow Box"
    | "Papercraft Stacked Papercut"
    | "Papercraft Thick Layered Papercut"
    | "Photo Alien"
    | "Photo Film Noir"
    | "Photo Glamour"
    | "Photo Hdr"
    | "Photo Iphone Photographic"
    | "Photo Long Exposure"
    | "Photo Neon Noir"
    | "Photo Silhouette"
    | "Photo Tilt Shift"
    | "Cinematic Diva"
    | "Abstract Expressionism"
    | "Academia"
    | "Action Figure"
    | "Adorable 3D Character"
    | "Adorable Kawaii"
    | "Art Deco"
    | "Art Nouveau"
    | "Astral Aura"
    | "Avant Garde"
    | "Baroque"
    | "Bauhaus Style Poster"
    | "Blueprint Schematic Drawing"
    | "Caricature"
    | "Cel Shaded Art"
    | "Character Design Sheet"
    | "Classicism Art"
    | "Color Field Painting"
    | "Colored Pencil Art"
    | "Conceptual Art"
    | "Constructivism"
    | "Cubism"
    | "Dadaism"
    | "Dark Fantasy"
    | "Dark Moody Atmosphere"
    | "Dmt Art Style"
    | "Doodle Art"
    | "Double Exposure"
    | "Dripping Paint Splatter Art"
    | "Expressionism"
    | "Faded Polaroid Photo"
    | "Fauvism"
    | "Flat 2d Art"
    | "Fortnite Art Style"
    | "Futurism"
    | "Glitchcore"
    | "Glo Fi"
    | "Googie Art Style"
    | "Graffiti Art"
    | "Harlem Renaissance Art"
    | "High Fashion"
    | "Idyllic"
    | "Impressionism"
    | "Infographic Drawing"
    | "Ink Dripping Drawing"
    | "Japanese Ink Drawing"
    | "Knolling Photography"
    | "Light Cheery Atmosphere"
    | "Logo Design"
    | "Luxurious Elegance"
    | "Macro Photography"
    | "Mandola Art"
    | "Marker Drawing"
    | "Medievalism"
    | "Minimalism"
    | "Neo Baroque"
    | "Neo Byzantine"
    | "Neo Futurism"
    | "Neo Impressionism"
    | "Neo Rococo"
    | "Neoclassicism"
    | "Op Art"
    | "Ornate And Intricate"
    | "Pencil Sketch Drawing"
    | "Pop Art 2"
    | "Rococo"
    | "Silhouette Art"
    | "Simple Vector Art"
    | "Sketchup"
    | "Steampunk 2"
    | "Surrealism"
    | "Suprematism"
    | "Terragen"
    | "Tranquil Relaxing Atmosphere"
    | "Sticker Designs"
    | "Vibrant Rim Light"
    | "Volumetric Lighting"
    | "Watercolor 2"
    | "Whimsical And Playful"
    | "Mk Chromolithography"
    | "Mk Cross Processing Print"
    | "Mk Dufaycolor Photograph"
    | "Mk Herbarium"
    | "Mk Punk Collage"
    | "Mk Mosaic"
    | "Mk Van Gogh"
    | "Mk Coloring Book"
    | "Mk Singer Sargent"
    | "Mk Pollock"
    | "Mk Basquiat"
    | "Mk Andy Warhol"
    | "Mk Halftone Print"
    | "Mk Gond Painting"
    | "Mk Albumen Print"
    | "Mk Aquatint Print"
    | "Mk Anthotype Print"
    | "Mk Inuit Carving"
    | "Mk Bromoil Print"
    | "Mk Calotype Print"
    | "Mk Color Sketchnote"
    | "Mk Cibulak Porcelain"
    | "Mk Alcohol Ink Art"
    | "Mk One Line Art"
    | "Mk Blacklight Paint"
    | "Mk Carnival Glass"
    | "Mk Cyanotype Print"
    | "Mk Cross Stitching"
    | "Mk Encaustic Paint"
    | "Mk Embroidery"
    | "Mk Gyotaku"
    | "Mk Luminogram"
    | "Mk Lite Brite Art"
    | "Mk Mokume Gane"
    | "Pebble Art"
    | "Mk Palekh"
    | "Mk Suminagashi"
    | "Mk Scrimshaw"
    | "Mk Shibori"
    | "Mk Vitreous Enamel"
    | "Mk Ukiyo E"
    | "Mk Vintage Airline Poster"
    | "Mk Vintage Travel Poster"
    | "Mk Bauhaus Style"
    | "Mk Afrofuturism"
    | "Mk Atompunk"
    | "Mk Constructivism"
    | "Mk Chicano Art"
    | "Mk De Stijl"
    | "Mk Dayak Art"
    | "Mk Fayum Portrait"
    | "Mk Illuminated Manuscript"
    | "Mk Kalighat Painting"
    | "Mk Madhubani Painting"
    | "Mk Pictorialism"
    | "Mk Pichwai Painting"
    | "Mk Patachitra Painting"
    | "Mk Samoan Art Inspired"
    | "Mk Tlingit Art"
    | "Mk Adnate Style"
    | "Mk Ron English Style"
    | "Mk Shepard Fairey Style"
  >;
  /**
   * You can choose Speed or Quality Default value: `"Extreme Speed"`
   */
  performance?: "Speed" | "Quality" | "Extreme Speed" | "Lightning";
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `4`
   */
  guidance_scale?: number;
  /**
   * The sharpness of the generated image. Use it to control how sharp the generated
   * image should be. Higher value means image and texture are sharper. Default value: `2`
   */
  sharpness?: number;
  /**
   * The size of the generated image. You can choose between some presets or
   * custom height and width that **must be multiples of 8**. Default value: `"1024x1024"`
   */
  aspect_ratio?: string;
  /**
   * Number of images to generate in one request Default value: `1`
   */
  num_images?: number;
  /**
   * The LoRAs to use for the image generation. You can use up to 5 LoRAs
   * and they will be merged together to generate the final image. Default value: `[object Object]`
   */
  loras?: Array<LoraWeight>;
  /**
   * Refiner (SDXL or SD 1.5) Default value: `"None"`
   */
  refiner_model?: "None" | "realisticVisionV60B1_v51VAE.safetensors";
  /**
   * Use 0.4 for SD1.5 realistic models; 0.667 for SD1.5 anime models
   * 0.8 for XL-refiners; or any value for switching two SDXL models. Default value: `0.8`
   */
  refiner_switch?: number;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "png" | "jpeg" | "webp";
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The image to upscale or vary.
   */
  uov_image_url: string | Blob | File;
  /**
   * The method to use for upscaling or varying. Default value: `"Vary (Strong)"`
   */
  uov_method?:
    | "Disabled"
    | "Vary (Subtle)"
    | "Vary (Strong)"
    | "Upscale (1.5x)"
    | "Upscale (2x)"
    | "Upscale (Fast 2x)";
  /**
   *
   */
  image_prompt_1?: ImagePrompt;
  /**
   *
   */
  image_prompt_2?: ImagePrompt;
  /**
   *
   */
  image_prompt_3?: ImagePrompt;
  /**
   *
   */
  image_prompt_4?: ImagePrompt;
  /**
   * Mixing Image Prompt and Vary/Upscale
   */
  mixing_image_prompt_and_vary_upscale?: boolean;
  /**
   * If set to false, the safety checker will be disabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type FooocusUpscaleOrVaryOutput = {
  /**
   * The generated image file info.
   */
  images: Array<Image>;
  /**
   * The time taken for the generation process.
   */
  timings: any;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
};
export type GenFillInput = {
  /**
   * Input Image to erase from
   */
  image_url: string | Blob | File;
  /**
   * The URL of the binary mask image that represents the area that will be cleaned.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt you would like to use to generate images.
   */
  prompt: string;
  /**
   * The negative prompt you would like to use to generate images. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Number of Images to generate. Default value: `1`
   */
  num_images?: number;
};
export type GenFillOutput = {
  /**
   * Generated Images
   */
  images: Array<Image>;
};
export type GrowMaskInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * The number of pixels to grow the mask. Default value: `5`
   */
  pixels?: number;
  /**
   * The threshold to convert the image to a mask. 0-255. Default value: `128`
   */
  threshold?: number;
};
export type GrowMaskOutput = {
  /**
   * The mask
   */
  image: Image;
};
export type GuidanceInput = {
  /**
   * The image that should be used as guidance, in base64 format, with the method defined in guidance_method_1. Accepted formats are jpeg, jpg, png, webp. Maximum file size 12MB. If more then one guidance method is used, all guidance images must be of the same aspect ratio, and this will be the aspect ratio of the generated results. If guidance_method_1 is selected, an image must be provided.
   */
  image_url: string | Blob | File;
  /**
   * Which guidance type you would like to include in the generation. Up to 4 guidance methods can be combined during a single inference. This parameter is optional.
   */
  method?:
    | "controlnet_canny"
    | "controlnet_depth"
    | "controlnet_recoloring"
    | "controlnet_color_grid";
  /**
   * Impact of the guidance. Default value: `1`
   */
  scale?: number;
};
export type HaiperVideoV25FastInput = {
  /**
   *
   */
  prompt: string;
  /**
   * The duration of the generated video in seconds Default value: `"4"`
   */
  duration?: "4" | "6";
  /**
   * Whether to use the model's prompt enhancer Default value: `true`
   */
  prompt_enhancer?: boolean;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same video every time.
   */
  seed?: number | null;
};
export type HaiperVideoV25FastOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type HaiperVideoV25ImageToVideoFastInput = {
  /**
   *
   */
  prompt: string;
  /**
   * The duration of the generated video in seconds Default value: `"4"`
   */
  duration?: "4" | "6";
  /**
   * Whether to use the model's prompt enhancer Default value: `true`
   */
  prompt_enhancer?: boolean;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same video every time.
   */
  seed?: number | null;
  /**
   * URL of the image to use as the first frame
   */
  image_url: string | Blob | File;
};
export type HaiperVideoV25ImageToVideoFastOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type HaiperVideoV2ImageToVideoInput = {
  /**
   *
   */
  prompt: string;
  /**
   * The duration of the generated video in seconds Default value: `"4"`
   */
  duration?: "4" | "6";
  /**
   * Whether to use the model's prompt enhancer Default value: `true`
   */
  prompt_enhancer?: boolean;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same video every time.
   */
  seed?: number | null;
  /**
   * URL of the image to use as the first frame
   */
  image_url: string | Blob | File;
};
export type HaiperVideoV2ImageToVideoOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type HaiperVideoV2Input = {
  /**
   *
   */
  prompt: string;
  /**
   * The duration of the generated video in seconds Default value: `"4"`
   */
  duration?: "4" | "6";
  /**
   * Whether to use the model's prompt enhancer Default value: `true`
   */
  prompt_enhancer?: boolean;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same video every time.
   */
  seed?: number | null;
};
export type HaiperVideoV2Output = {
  /**
   * The generated video
   */
  video: File;
};
export type HEDInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
  /**
   * Whether to use the safe version of the HED detector
   */
  safe?: boolean;
  /**
   * Whether to use the scribble version of the HED detector
   */
  scribble?: boolean;
};
export type HEDOutput = {
  /**
   * Image with lines detected using the HED detector
   */
  image: Image;
};
export type HunyuanVideoInput = {
  /**
   * The prompt to generate the video from.
   */
  prompt: string;
  /**
   * The number of inference steps to run. Lower gets faster results, higher gets better results. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The seed to use for generating the video.
   */
  seed?: number | null;
  /**
   * By default, generations are done with 35 steps. Pro mode does 55 steps which results in higher quality videos but will take more time and cost 2x more billing units.
   */
  pro_mode?: boolean;
  /**
   * The aspect ratio of the video to generate. Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16";
  /**
   * The resolution of the video to generate. Default value: `"720p"`
   */
  resolution?: "480p" | "580p" | "720p";
  /**
   * The number of frames to generate. Default value: `"129"`
   */
  num_frames?: "129" | "85";
};
export type HunyuanVideoLoraInput = {
  /**
   * The prompt to generate the video from.
   */
  prompt: string;
  /**
   * The seed to use for generating the video.
   */
  seed?: number | null;
  /**
   * By default, generations are done with 35 steps. Pro mode does 55 steps which results in higher quality videos but will take more time and cost 2x more billing units.
   */
  pro_mode?: boolean;
  /**
   * The aspect ratio of the video to generate. Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16";
  /**
   * The resolution of the video to generate. Default value: `"720p"`
   */
  resolution?: "480p" | "580p" | "720p";
  /**
   * The number of frames to generate. Default value: `"129"`
   */
  num_frames?: "129" | "85";
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type HunyuanVideoLoraOutput = {
  /**
   *
   */
  video: File;
  /**
   * The seed used for generating the video.
   */
  seed: number;
};
export type HunyuanVideoLoraTrainingInput = {
  /**
   * URL to zip archive with images. Try to use at least 4 images in general the more the better.
   *
   * In addition to images the archive can contain text files with captions. Each text file should have the same name as the image file it corresponds to.
   */
  images_data_url: string | Blob | File;
  /**
   * Number of steps to train the LoRA on.
   */
  steps: number;
  /**
   * The trigger word to use. Default value: `""`
   */
  trigger_word?: string;
  /**
   * Learning rate to use for training. Default value: `0.0001`
   */
  learning_rate?: number;
  /**
   * Whether to generate captions for the images. Default value: `true`
   */
  do_caption?: boolean;
  /**
   * The format of the archive. If not specified, the format will be inferred from the URL.
   */
  data_archive_format?: string | null;
};
export type HunyuanVideoLoraTrainingOutput = {
  /**
   * URL to the trained diffusers lora weights.
   */
  diffusers_lora_file: File;
  /**
   * URL to the lora configuration file.
   */
  config_file: File;
};
export type HunyuanVideoOutput = {
  /**
   *
   */
  video: File;
  /**
   * The seed used for generating the video.
   */
  seed: number;
};
export type Hyper3dRodinInput = {
  /**
   * A textual prompt to guide model generation. Required for Text-to-3D mode. Optional for Image-to-3D mode. Default value: `""`
   */
  prompt?: string;
  /**
   * URL of images to use while generating the 3D model. Required for Image-to-3D mode. Optional for Text-to-3D mode.
   */
  input_image_urls?: Array<string>;
  /**
   * For fuse mode, One or more images are required.It will generate a model by extracting and fusing features of objects from multiple images.For concat mode, need to upload multiple multi-view images of the same object and generate the model.(You can upload multi-view images in any order, regardless of the order of view.) Default value: `"concat"`
   */
  condition_mode?: "fuse" | "concat";
  /**
   * Seed value for randomization, ranging from 0 to 65535. Optional.
   */
  seed?: number | null;
  /**
   * Format of the geometry file. Possible values: glb, usdz, fbx, obj, stl. Default is glb. Default value: `"glb"`
   */
  geometry_file_format?: "glb" | "usdz" | "fbx" | "obj" | "stl";
  /**
   * Material type. Possible values: PBR, Shaded. Default is PBR. Default value: `"PBR"`
   */
  material?: "PBR" | "Shaded";
  /**
   * Generation quality. Possible values: high, medium, low, extra-low. Default is medium. Default value: `"medium"`
   */
  quality?: "high" | "medium" | "low" | "extra-low";
  /**
   * Whether to export the model using hyper mode. Default is false.
   */
  use_hyper?: boolean;
  /**
   * Tier of generation. For Rodin Sketch, set to Sketch. For Rodin Regular, set to Regular. Default value: `"Regular"`
   */
  tier?: "Regular" | "Sketch";
  /**
   * When generating the human-like model, this parameter control the generation result to T/A Pose.
   */
  TAPose?: boolean;
  /**
   * An array that specifies the dimensions and scaling factor of the bounding box. Typically, this array contains 3 elements, Length(X-axis), Width(Y-axis) and Height(Z-axis).
   */
  bbox_condition?: Array<number> | null;
  /**
   * Generation add-on features. Default is []. Possible values are HighPack. The HighPack option will provide 4K resolution textures instead of the default 1K, as well as models with high-poly. It will cost triple the billable units.
   */
  addons?: string | null;
};
export type Hyper3dRodinOutput = {
  /**
   * Generated 3D object file.
   */
  model_mesh: File;
  /**
   * Seed value used for generation.
   */
  seed: number;
  /**
   * Generated textures for the 3D object.
   */
  textures: Array<Image>;
};
export type HyperSdxlImageToImageInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `"1"`
   */
  num_inference_steps?: "1" | "2" | "4";
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type HyperSdxlImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type HyperSdxlInpaintingInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `"1"`
   */
  num_inference_steps?: "1" | "2" | "4";
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type HyperSdxlInpaintingOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type HyperSdxlInput = {
  /**
   *
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `"1"`
   */
  num_inference_steps?: "1" | "2" | "4";
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type HyperSdxlOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type I2VLiveOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type I2VOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type IclightV2Input = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * Negative Prompt for the image Default value: `""`
   */
  negative_prompt?: string;
  /**
   * URL of image to be used for relighting
   */
  image_url: string | Blob | File;
  /**
   * URL of mask to be used for ic-light conditioning image
   */
  mask_image_url?: string | Blob | File;
  /**
   * Threshold for the background removal algorithm. A high threshold will produce sharper masks. Note: This parameter is currently deprecated and has no effect on the output. Default value: `0.67`
   */
  background_threshold?: number;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Provide lighting conditions for the model Default value: `"None"`
   */
  initial_latent?: "None" | "Left" | "Right" | "Top" | "Bottom";
  /**
   * Use HR fix
   */
  enable_hr_fix?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The real classifier-free-guidance scale for the generation. Default value: `1`
   */
  cfg?: number;
  /**
   * Strength for low-resolution pass. Default value: `0.98`
   */
  lowres_denoise?: number;
  /**
   * Strength for high-resolution pass. Only used if enable_hr_fix is True. Default value: `0.95`
   */
  highres_denoise?: number;
  /**
   *  Default value: `0.5`
   */
  hr_downscale?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
};
export type IclightV2Output = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type IdeogramV2EditInput = {
  /**
   * The prompt to fill the masked part of the image.
   */
  prompt: string;
  /**
   * The image URL to generate an image from. Needs to match the dimensions of the mask.
   */
  image_url: string | Blob | File;
  /**
   * The mask URL to inpaint the image. Needs to match the dimensions of the input image.
   */
  mask_url: string | Blob | File;
  /**
   * Seed for the random number generator
   */
  seed?: number;
  /**
   * The style of the generated image Default value: `"auto"`
   */
  style?: "auto" | "general" | "realistic" | "design" | "render_3D" | "anime";
  /**
   * Whether to expand the prompt with MagicPrompt functionality. Default value: `true`
   */
  expand_prompt?: boolean;
};
export type IdeogramV2EditOutput = {
  /**
   *
   */
  images: Array<File>;
  /**
   * Seed used for the random number generator
   */
  seed: number;
};
export type IdeogramV2Input = {
  /**
   *
   */
  prompt: string;
  /**
   * The aspect ratio of the generated image Default value: `"1:1"`
   */
  aspect_ratio?:
    | "10:16"
    | "16:10"
    | "9:16"
    | "16:9"
    | "4:3"
    | "3:4"
    | "1:1"
    | "1:3"
    | "3:1"
    | "3:2"
    | "2:3";
  /**
   * Whether to expand the prompt with MagicPrompt functionality. Default value: `true`
   */
  expand_prompt?: boolean;
  /**
   * Seed for the random number generator
   */
  seed?: number;
  /**
   * The style of the generated image Default value: `"auto"`
   */
  style?: "auto" | "general" | "realistic" | "design" | "render_3D" | "anime";
  /**
   * A negative prompt to avoid in the generated image Default value: `""`
   */
  negative_prompt?: string;
};
export type IdeogramV2Output = {
  /**
   *
   */
  images: Array<File>;
  /**
   * Seed used for the random number generator
   */
  seed: number;
};
export type IdeogramV2RemixInput = {
  /**
   * The prompt to remix the image with
   */
  prompt: string;
  /**
   * The image URL to remix
   */
  image_url: string | Blob | File;
  /**
   * The aspect ratio of the generated image Default value: `"1:1"`
   */
  aspect_ratio?:
    | "10:16"
    | "16:10"
    | "9:16"
    | "16:9"
    | "4:3"
    | "3:4"
    | "1:1"
    | "1:3"
    | "3:1"
    | "3:2"
    | "2:3";
  /**
   * Strength of the input image in the remix Default value: `0.8`
   */
  strength?: number;
  /**
   * Whether to expand the prompt with MagicPrompt functionality. Default value: `true`
   */
  expand_prompt?: boolean;
  /**
   * Seed for the random number generator
   */
  seed?: number;
  /**
   * The style of the generated image Default value: `"auto"`
   */
  style?: "auto" | "general" | "realistic" | "design" | "render_3D" | "anime";
};
export type IdeogramV2RemixOutput = {
  /**
   *
   */
  images: Array<File>;
  /**
   * Seed used for the random number generator
   */
  seed: number;
};
export type IdeogramV2TurboEditInput = {
  /**
   * The prompt to fill the masked part of the image.
   */
  prompt: string;
  /**
   * The image URL to generate an image from. Needs to match the dimensions of the mask.
   */
  image_url: string | Blob | File;
  /**
   * The mask URL to inpaint the image. Needs to match the dimensions of the input image.
   */
  mask_url: string | Blob | File;
  /**
   * Seed for the random number generator
   */
  seed?: number;
  /**
   * The style of the generated image Default value: `"auto"`
   */
  style?: "auto" | "general" | "realistic" | "design" | "render_3D" | "anime";
  /**
   * Whether to expand the prompt with MagicPrompt functionality. Default value: `true`
   */
  expand_prompt?: boolean;
};
export type IdeogramV2TurboEditOutput = {
  /**
   *
   */
  images: Array<File>;
  /**
   * Seed used for the random number generator
   */
  seed: number;
};
export type IdeogramV2TurboInput = {
  /**
   *
   */
  prompt: string;
  /**
   * The aspect ratio of the generated image Default value: `"1:1"`
   */
  aspect_ratio?:
    | "10:16"
    | "16:10"
    | "9:16"
    | "16:9"
    | "4:3"
    | "3:4"
    | "1:1"
    | "1:3"
    | "3:1"
    | "3:2"
    | "2:3";
  /**
   * Whether to expand the prompt with MagicPrompt functionality. Default value: `true`
   */
  expand_prompt?: boolean;
  /**
   * Seed for the random number generator
   */
  seed?: number;
  /**
   * The style of the generated image Default value: `"auto"`
   */
  style?: "auto" | "general" | "realistic" | "design" | "render_3D" | "anime";
  /**
   * A negative prompt to avoid in the generated image Default value: `""`
   */
  negative_prompt?: string;
};
export type IdeogramV2TurboOutput = {
  /**
   *
   */
  images: Array<File>;
  /**
   * Seed used for the random number generator
   */
  seed: number;
};
export type IdeogramV2TurboRemixInput = {
  /**
   * The prompt to remix the image with
   */
  prompt: string;
  /**
   * The image URL to remix
   */
  image_url: string | Blob | File;
  /**
   * The aspect ratio of the generated image Default value: `"1:1"`
   */
  aspect_ratio?:
    | "10:16"
    | "16:10"
    | "9:16"
    | "16:9"
    | "4:3"
    | "3:4"
    | "1:1"
    | "1:3"
    | "3:1"
    | "3:2"
    | "2:3";
  /**
   * Strength of the input image in the remix Default value: `0.8`
   */
  strength?: number;
  /**
   * Whether to expand the prompt with MagicPrompt functionality. Default value: `true`
   */
  expand_prompt?: boolean;
  /**
   * Seed for the random number generator
   */
  seed?: number;
  /**
   * The style of the generated image Default value: `"auto"`
   */
  style?: "auto" | "general" | "realistic" | "design" | "render_3D" | "anime";
};
export type IdeogramV2TurboRemixOutput = {
  /**
   *
   */
  images: Array<File>;
  /**
   * Seed used for the random number generator
   */
  seed: number;
};
export type IllusionDiffusionInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * The scale of the ControlNet. Default value: `1`
   */
  controlnet_conditioning_scale?: number;
  /**
   *
   */
  control_guidance_start?: number;
  /**
   *  Default value: `1`
   */
  control_guidance_end?: number;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed?: number;
  /**
   * Scheduler / sampler to use for the image denoising process. Default value: `"Euler"`
   */
  scheduler?: "DPM++ Karras SDE" | "Euler";
  /**
   * Increasing the amount of steps tells Stable Diffusion that it should take more steps
   * to generate your final result which can increase the amount of detail in your image. Default value: `40`
   */
  num_inference_steps?: number;
  /**
   * The size of the generated image. You can choose between some presets or
   * custom height and width that **must be multiples of 8**. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
};
export type IllusionDiffusionOutput = {
  /**
   * The generated image file info.
   */
  image: Image;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
};
export type ImageExpansionInput = {
  /**
   * The URL of the input image.
   */
  image_url: string | Blob | File;
  /**
   * The desired size of the final image, after the expansion. should have an area of less than 5000x5000 pixels.
   */
  canvas_size: Array<number>;
  /**
   * The desired size of the original image, inside the full canvas. Ensure that the ratio of input image foreground or main subject to the canvas area is greater than 15% to achieve optimal results.
   */
  original_image_size: Array<number>;
  /**
   * The desired location of the original image, inside the full canvas. Provide the location of the upper left corner of the original image. The location can also be outside the canvas (the original image will be cropped).
   */
  original_image_location: Array<number>;
  /**
   * Text on which you wish to base the image expansion. This parameter is optional. Bria currently supports prompts in English only, excluding special characters. Default value: `""`
   */
  prompt?: string;
  /**
   * You can choose whether you want your generated expension to be random or predictable. You can recreate the same result in the future by using the seed value of a result from the response. You can exclude this parameter if you are not interested in recreating your results. This parameter is optional.
   */
  seed?: number;
  /**
   * The negative prompt you would like to use to generate images. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * Number of Images to generate. Default value: `1`
   */
  num_images?: number;
};
export type ImageExpansionOutput = {
  /**
   * The generated image
   */
  image: Image;
  /**
   * Seed value used for generation.
   */
  seed: number;
};
export type ImageInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
};
export type ImagePreprocessorsDepthAnythingV2Input = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
};
export type ImagePreprocessorsDepthAnythingV2Output = {
  /**
   * Image with depth map
   */
  image: Image;
};
export type ImagePreprocessorsHedInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
  /**
   * Whether to use the safe version of the HED detector
   */
  safe?: boolean;
  /**
   * Whether to use the scribble version of the HED detector
   */
  scribble?: boolean;
};
export type ImagePreprocessorsHedOutput = {
  /**
   * Image with lines detected using the HED detector
   */
  image: Image;
};
export type ImagePreprocessorsLineartInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
  /**
   * Whether to use the coarse model
   */
  coarse?: boolean;
};
export type ImagePreprocessorsLineartOutput = {
  /**
   * Image with edges detected using the Canny algorithm
   */
  image: Image;
};
export type ImagePreprocessorsMidasInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
  /**
   * A parameter for the MiDaS detector Default value: `6.283185307179586`
   */
  a?: number;
  /**
   * Background threshold for the MiDaS detector Default value: `0.1`
   */
  background_threshold?: number;
};
export type ImagePreprocessorsMidasOutput = {
  /**
   * Image with MiDaS depth map
   */
  depth_map: Image;
  /**
   * Image with MiDaS normal map
   */
  normal_map: Image;
};
export type ImagePreprocessorsMlsdInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
  /**
   * Score threshold for the MLSD detector Default value: `0.1`
   */
  score_threshold?: number;
  /**
   * Distance threshold for the MLSD detector Default value: `0.1`
   */
  distance_threshold?: number;
};
export type ImagePreprocessorsMlsdOutput = {
  /**
   * Image with lines detected using the MLSD detector
   */
  image: Image;
};
export type ImagePreprocessorsPidiInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
  /**
   * Whether to use the safe version of the Pidi detector
   */
  safe?: boolean;
  /**
   * Whether to use the scribble version of the Pidi detector
   */
  scribble?: boolean;
  /**
   * Whether to apply the filter to the image.
   */
  apply_filter?: boolean;
};
export type ImagePreprocessorsPidiOutput = {
  /**
   * Image with Pidi lines detected
   */
  image: Image;
};
export type ImagePreprocessorsSamInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
};
export type ImagePreprocessorsSamOutput = {
  /**
   * Image with SAM segmentation map
   */
  image: Image;
};
export type ImagePreprocessorsScribbleInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
  /**
   * The model to use for the Scribble detector Default value: `"HED"`
   */
  model?: "HED" | "PiDi";
  /**
   * Whether to use the safe version of the Scribble detector
   */
  safe?: boolean;
};
export type ImagePreprocessorsScribbleOutput = {
  /**
   * Image with lines detected using the Scribble detector
   */
  image: Image;
};
export type ImagePreprocessorsTeedInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
};
export type ImagePreprocessorsTeedOutput = {
  /**
   * Image with TeeD lines detected
   */
  image: Image;
};
export type ImagePreprocessorsZoeInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
};
export type ImagePreprocessorsZoeOutput = {
  /**
   * Image with depth map
   */
  image: Image;
};
export type ImageSizeOutput = {
  /**
   * Image size
   */
  image_size: any;
};
export type ImageToImageControlNetInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The URL of the control image.
   */
  control_image_url: string | Blob | File;
  /**
   * The scale of the controlnet conditioning. Default value: `0.5`
   */
  controlnet_conditioning_scale?: number;
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the control image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
};
export type ImageToImageControlNetUnionInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The scale of the controlnet conditioning. Default value: `0.5`
   */
  controlnet_conditioning_scale?: number;
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the control image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `35`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
  /**
   * The URL of the control image.
   */
  openpose_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the openpose image. Default value: `true`
   */
  openpose_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  depth_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the depth image. Default value: `true`
   */
  depth_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  teed_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the teed image. Default value: `true`
   */
  teed_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  canny_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the canny image. Default value: `true`
   */
  canny_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  normal_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the normal image. Default value: `true`
   */
  normal_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  segmentation_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the segmentation image. Default value: `true`
   */
  segmentation_preprocess?: boolean;
};
export type ImageToImageFooocusInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the prompt image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `8`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `2`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts. Default value: `true`
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
  /**
   * If set to true, a smaller model will try to refine the output after it was processed. Default value: `true`
   */
  enable_refiner?: boolean;
};
export type ImageToImageHyperInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `"1"`
   */
  num_inference_steps?: "1" | "2" | "4";
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type ImageToImageInput = {
  /**
   * URL or HuggingFace ID of the base model to generate the image.
   */
  model_name: string;
  /**
   * URL or HuggingFace ID of the custom U-Net model to use for the image generation.
   */
  unet_name?: string;
  /**
   * The variant of the model to use for huggingface models, e.g. 'fp16'.
   */
  variant?: string;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * If set to true, the prompt weighting syntax will be used.
   * Additionally, this will lift the 77 token limit by averaging embeddings.
   */
  prompt_weighting?: boolean;
  /**
   * URL of image to use for image to image/inpainting.
   */
  image_url?: string | Blob | File;
  /**
   * The amount of noise to add to noise image for image. Only used if the image_url is provided. 1.0 is complete noise and 0 is no noise. Default value: `0.5`
   */
  noise_strength?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The embeddings to use for the image generation. Only a single embedding is supported at the moment.
   * The embeddings will be used to map the tokens in the prompt to the embedding weights. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * The control nets to use for the image generation. You can use any number of control nets
   * and they will be applied to the image at the specified timesteps. Default value: ``
   */
  controlnets?: Array<ControlNet>;
  /**
   * If set to true, the controlnet will be applied to only the conditional predictions.
   */
  controlnet_guess_mode?: boolean;
  /**
   * The IP adapter to use for the image generation. Default value: ``
   */
  ip_adapter?: Array<IPAdapter>;
  /**
   * The path to the image encoder model to use for the image generation.
   */
  image_encoder_path?: string;
  /**
   * The subfolder of the image encoder model to use for the image generation.
   */
  image_encoder_subfolder?: string;
  /**
   * The weight name of the image encoder model to use for the image generation. Default value: `"pytorch_model.bin"`
   */
  image_encoder_weight_name?: string;
  /**
   * The URL of the IC Light model to use for the image generation.
   */
  ic_light_model_url?: string | Blob | File;
  /**
   * The URL of the IC Light model background image to use for the image generation.
   * Make sure to use a background compatible with the model.
   */
  ic_light_model_background_image_url?: string | Blob | File;
  /**
   * The URL of the IC Light model image to use for the image generation.
   */
  ic_light_image_url?: string | Blob | File;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Increasing the amount of steps tells Stable Diffusion that it should take more steps
   * to generate your final result which can increase the amount of detail in your image. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * Skips part of the image generation process, leading to slightly different results.
   * This means the image renders faster, too.
   */
  clip_skip?: number;
  /**
   * Scheduler / sampler to use for the image denoising process.
   */
  scheduler?:
    | "DPM++ 2M"
    | "DPM++ 2M Karras"
    | "DPM++ 2M SDE"
    | "DPM++ 2M SDE Karras"
    | "Euler"
    | "Euler A"
    | "Euler (trailing timesteps)"
    | "LCM"
    | "LCM (trailing timesteps)"
    | "DDIM"
    | "TCD";
  /**
   * Optionally override the timesteps to use for the denoising process. Only works with schedulers which support the `timesteps` argument in their `set_timesteps` method.
   * Defaults to not overriding, in which case the scheduler automatically sets the timesteps based on the `num_inference_steps` parameter.
   * If set to a custom timestep schedule, the `num_inference_steps` parameter will be ignored. Cannot be set if `sigmas` is set. Default value: `[object Object]`
   */
  timesteps?: TimestepsInput;
  /**
   * Optionally override the sigmas to use for the denoising process. Only works with schedulers which support the `sigmas` argument in their `set_sigmas` method.
   * Defaults to not overriding, in which case the scheduler automatically sets the sigmas based on the `num_inference_steps` parameter.
   * If set to a custom sigma schedule, the `num_inference_steps` parameter will be ignored. Cannot be set if `timesteps` is set. Default value: `[object Object]`
   */
  sigmas?: SigmasInput;
  /**
   * The type of prediction to use for the image generation.
   * The `epsilon` is the default. Default value: `"epsilon"`
   */
  prediction_type?: "v_prediction" | "epsilon";
  /**
   * Whether to set the rescale_betas_snr_zero option or not for the sampler
   */
  rescale_betas_snr_zero?: boolean;
  /**
   * The format of the generated image. Default value: `"png"`
   */
  image_format?: "jpeg" | "png";
  /**
   * Number of images to generate in one request. Note that the higher the batch size,
   * the longer it will take to generate the images. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * The size of the tiles to be used for the image generation. Default value: `4096`
   */
  tile_width?: number;
  /**
   * The size of the tiles to be used for the image generation. Default value: `4096`
   */
  tile_height?: number;
  /**
   * The stride of the tiles to be used for the image generation. Default value: `2048`
   */
  tile_stride_width?: number;
  /**
   * The stride of the tiles to be used for the image generation. Default value: `2048`
   */
  tile_stride_height?: number;
  /**
   * The eta value to be used for the image generation.
   */
  eta?: number;
  /**
   * If set to true, the latents will be saved for debugging.
   */
  debug_latents?: boolean;
  /**
   * If set to true, the latents will be saved for debugging per pass.
   */
  debug_per_pass_latents?: boolean;
};
export type ImageToImageLCMInput = {
  /**
   * The name of the model to use. Default value: `"stabilityai/stable-diffusion-xl-base-1.0"`
   */
  model_name?:
    | "stabilityai/stable-diffusion-xl-base-1.0"
    | "runwayml/stable-diffusion-v1-5";
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `6`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `1.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN. Default value: `true`
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
};
export type ImageToImageLightningInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `"4"`
   */
  num_inference_steps?: "1" | "2" | "4" | "8";
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type ImageToImagePlaygroundv25Input = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
};
export type ImageToImageSD15Input = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type ImageToImageTurboInput = {
  /**
   * The name of the model to use. Default value: `"stabilityai/sdxl-turbo"`
   */
  model_name?: "stabilityai/sdxl-turbo" | "stabilityai/sd-turbo";
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `2`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `1`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN. Default value: `true`
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
};
export type ImageToVideoInput = {
  /**
   * The prompt to generate the video from.
   */
  prompt: string;
  /**
   * The negative prompt to generate the video from. Default value: `"low quality, worst quality, deformed, distorted, disfigured, motion smear, motion artifacts, fused fingers, bad anatomy, weird hand, ugly"`
   */
  negative_prompt?: string;
  /**
   * The seed to use for random number generation.
   */
  seed?: number;
  /**
   * The number of inference steps to take. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The guidance scale to use. Default value: `3`
   */
  guidance_scale?: number;
  /**
   * The URL of the image to generate the video from.
   */
  image_url: string | Blob | File;
};
export type ImageutilsDepthInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * a Default value: `6.283185307179586`
   */
  a?: number;
  /**
   * bg_th Default value: `0.1`
   */
  bg_th?: number;
  /**
   * depth_and_normal
   */
  depth_and_normal?: boolean;
};
export type ImageutilsDepthOutput = {
  /**
   * The depth map.
   */
  image: Image;
};
export type ImageutilsMarigoldDepthInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * Number of denoising steps. Defaults to `10`. The higher the number, the more accurate the result, but the slower the inference. Default value: `10`
   */
  num_inference_steps?: number;
  /**
   * Number of predictions to average over. Defaults to `10`. The higher the number, the more accurate the result, but the slower the inference. Default value: `10`
   */
  ensemble_size?: number;
  /**
   * Maximum processing resolution. Defaults `0` which means it uses the size of the input image.
   */
  processing_res?: number;
};
export type ImageutilsMarigoldDepthOutput = {
  /**
   * The depth map.
   */
  image: Image;
};
export type ImageutilsNsfwInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
};
export type ImageutilsNsfwOutput = {
  /**
   * The probability of the image being NSFW.
   */
  nsfw_probability: number;
};
export type ImageutilsRembgInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * If set to true, the resulting image be cropped to a bounding box around the subject
   */
  crop_to_bbox?: boolean;
};
export type ImageutilsRembgOutput = {
  /**
   * Background removed image.
   */
  image: Image;
};
export type ImageutilsSamInput = {
  /**
   * Url to input image
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use when generating masks
   */
  text_prompt?: string;
  /**
   * Image size Default value: `1024`
   */
  size?: number;
  /**
   * IOU threshold for filtering the annotations Default value: `0.9`
   */
  iou?: number;
  /**
   * Draw high-resolution segmentation masks Default value: `true`
   */
  retina?: boolean;
  /**
   * Object confidence threshold Default value: `0.4`
   */
  confidence?: number;
  /**
   * Coordinates for multiple boxes, e.g. [[x,y,w,h],[x2,y2,w2,h2]] Default value: `0,0,0,0`
   */
  box_prompt?: Array<Array<void>>;
  /**
   * Coordinates for multiple points [[x1,y1],[x2,y2]] Default value: `0,0`
   */
  point_prompt?: Array<Array<void>>;
  /**
   * Label for point, [1,0], 0 = background, 1 = foreground Default value: `0`
   */
  point_label?: Array<number>;
  /**
   * Draw the edges of the masks
   */
  with_contours?: boolean;
  /**
   * Attempt better quality output using morphologyEx
   */
  better_quality?: boolean;
  /**
   * Output black and white, multiple masks will be combined into one mask
   */
  black_white?: boolean;
  /**
   * Invert mask colors
   */
  invert?: boolean;
};
export type ImageutilsSamOutput = {
  /**
   * Combined image of all detected masks
   */
  image?: Image;
};
export type ImageWithTextInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
  /**
   * Text input for the task
   */
  text_input: string;
};
export type ImageWithUserCoordinatesInput = {
  /**
   * The URL of the image to be processed.
   */
  image_url: string | Blob | File;
  /**
   * The user input coordinates
   */
  region: Region;
};
export type InpaintingControlNetInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The URL of the control image.
   */
  control_image_url: string | Blob | File;
  /**
   * The scale of the controlnet conditioning. Default value: `0.5`
   */
  controlnet_conditioning_scale?: number;
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the control image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
};
export type InpaintingControlNetUnionInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The scale of the controlnet conditioning. Default value: `0.5`
   */
  controlnet_conditioning_scale?: number;
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the control image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `35`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
  /**
   * The URL of the control image.
   */
  openpose_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the openpose image. Default value: `true`
   */
  openpose_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  depth_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the depth image. Default value: `true`
   */
  depth_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  teed_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the teed image. Default value: `true`
   */
  teed_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  canny_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the canny image. Default value: `true`
   */
  canny_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  normal_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the normal image. Default value: `true`
   */
  normal_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  segmentation_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the segmentation image. Default value: `true`
   */
  segmentation_preprocess?: boolean;
};
export type InpaintingFooocusInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `8`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `2`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts. Default value: `true`
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
  /**
   * If set to true, a smaller model will try to refine the output after it was processed. Default value: `true`
   */
  enable_refiner?: boolean;
};
export type InpaintingHyperInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `"1"`
   */
  num_inference_steps?: "1" | "2" | "4";
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type InpaintingInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
};
export type InpaintingLCMInput = {
  /**
   * The name of the model to use. Default value: `"stabilityai/stable-diffusion-xl-base-1.0"`
   */
  model_name?:
    | "stabilityai/stable-diffusion-xl-base-1.0"
    | "runwayml/stable-diffusion-v1-5";
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `6`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `1.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN. Default value: `true`
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
};
export type InpaintingLightningInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `"4"`
   */
  num_inference_steps?: "1" | "2" | "4" | "8";
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type InpaintingPlaygroundv25Input = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
};
export type InpaintingSD15Input = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type InpaintingTurboInput = {
  /**
   * The name of the model to use. Default value: `"stabilityai/sdxl-turbo"`
   */
  model_name?: "stabilityai/sdxl-turbo" | "stabilityai/sd-turbo";
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `2`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `1`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN. Default value: `true`
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
};
export type InpaintInput = {
  /**
   * URL or HuggingFace ID of the base model to generate the image.
   */
  model_name: string;
  /**
   * URL or HuggingFace ID of the custom U-Net model to use for the image generation.
   */
  unet_name?: string;
  /**
   * The variant of the model to use for huggingface models, e.g. 'fp16'.
   */
  variant?: string;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * If set to true, the prompt weighting syntax will be used.
   * Additionally, this will lift the 77 token limit by averaging embeddings.
   */
  prompt_weighting?: boolean;
  /**
   * URL of image to use for image to image/inpainting.
   */
  image_url?: string | Blob | File;
  /**
   * URL of black-and-white image to use as mask during inpainting.
   */
  mask_url?: string | Blob | File;
  /**
   * The amount of noise to add to noise image for image. Only used if the image_url is provided. 1.0 is complete noise and 0 is no noise. Default value: `0.5`
   */
  noise_strength?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The embeddings to use for the image generation. Only a single embedding is supported at the moment.
   * The embeddings will be used to map the tokens in the prompt to the embedding weights. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * The control nets to use for the image generation. You can use any number of control nets
   * and they will be applied to the image at the specified timesteps. Default value: ``
   */
  controlnets?: Array<ControlNet>;
  /**
   * If set to true, the controlnet will be applied to only the conditional predictions.
   */
  controlnet_guess_mode?: boolean;
  /**
   * The IP adapter to use for the image generation. Default value: ``
   */
  ip_adapter?: Array<IPAdapter>;
  /**
   * The path to the image encoder model to use for the image generation.
   */
  image_encoder_path?: string;
  /**
   * The subfolder of the image encoder model to use for the image generation.
   */
  image_encoder_subfolder?: string;
  /**
   * The weight name of the image encoder model to use for the image generation. Default value: `"pytorch_model.bin"`
   */
  image_encoder_weight_name?: string;
  /**
   * The URL of the IC Light model to use for the image generation.
   */
  ic_light_model_url?: string | Blob | File;
  /**
   * The URL of the IC Light model background image to use for the image generation.
   * Make sure to use a background compatible with the model.
   */
  ic_light_model_background_image_url?: string | Blob | File;
  /**
   * The URL of the IC Light model image to use for the image generation.
   */
  ic_light_image_url?: string | Blob | File;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Increasing the amount of steps tells Stable Diffusion that it should take more steps
   * to generate your final result which can increase the amount of detail in your image. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * Skips part of the image generation process, leading to slightly different results.
   * This means the image renders faster, too.
   */
  clip_skip?: number;
  /**
   * Scheduler / sampler to use for the image denoising process.
   */
  scheduler?:
    | "DPM++ 2M"
    | "DPM++ 2M Karras"
    | "DPM++ 2M SDE"
    | "DPM++ 2M SDE Karras"
    | "Euler"
    | "Euler A"
    | "Euler (trailing timesteps)"
    | "LCM"
    | "LCM (trailing timesteps)"
    | "DDIM"
    | "TCD";
  /**
   * Optionally override the timesteps to use for the denoising process. Only works with schedulers which support the `timesteps` argument in their `set_timesteps` method.
   * Defaults to not overriding, in which case the scheduler automatically sets the timesteps based on the `num_inference_steps` parameter.
   * If set to a custom timestep schedule, the `num_inference_steps` parameter will be ignored. Cannot be set if `sigmas` is set. Default value: `[object Object]`
   */
  timesteps?: TimestepsInput;
  /**
   * Optionally override the sigmas to use for the denoising process. Only works with schedulers which support the `sigmas` argument in their `set_sigmas` method.
   * Defaults to not overriding, in which case the scheduler automatically sets the sigmas based on the `num_inference_steps` parameter.
   * If set to a custom sigma schedule, the `num_inference_steps` parameter will be ignored. Cannot be set if `timesteps` is set. Default value: `[object Object]`
   */
  sigmas?: SigmasInput;
  /**
   * The type of prediction to use for the image generation.
   * The `epsilon` is the default. Default value: `"epsilon"`
   */
  prediction_type?: "v_prediction" | "epsilon";
  /**
   * Whether to set the rescale_betas_snr_zero option or not for the sampler
   */
  rescale_betas_snr_zero?: boolean;
  /**
   * The format of the generated image. Default value: `"png"`
   */
  image_format?: "jpeg" | "png";
  /**
   * Number of images to generate in one request. Note that the higher the batch size,
   * the longer it will take to generate the images. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * The size of the tiles to be used for the image generation. Default value: `4096`
   */
  tile_width?: number;
  /**
   * The size of the tiles to be used for the image generation. Default value: `4096`
   */
  tile_height?: number;
  /**
   * The stride of the tiles to be used for the image generation. Default value: `2048`
   */
  tile_stride_width?: number;
  /**
   * The stride of the tiles to be used for the image generation. Default value: `2048`
   */
  tile_stride_height?: number;
  /**
   * The eta value to be used for the image generation.
   */
  eta?: number;
  /**
   * If set to true, the latents will be saved for debugging.
   */
  debug_latents?: boolean;
  /**
   * If set to true, the latents will be saved for debugging per pass.
   */
  debug_per_pass_latents?: boolean;
};
export type InpaintOutput = {
  /**
   * The generated image files info.
   */
  image: Image;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
};
export type InpaintTurboInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The number of inference steps to perform. Default value: `4`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you.
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The size of the generated image. Defaults to landscape_4_3 if no controlnet has been passed, otherwise defaults to the size of the controlnet conditioning image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * URL of Image for inpainting
   */
  image_url: string | Blob | File;
  /**
   * Strength for Image-to-Image. Default value: `0.83`
   */
  strength?: number;
  /**
   * URL of mask image for inpainting.
   */
  mask_image_url: string | Blob | File;
};
export type Input = {
  /**
   * List of tracks to be combined into the final media
   */
  tracks: Array<Track>;
};
export type InsertTextInput = {
  /**
   * Input text
   */
  text: string;
  /**
   * Template to insert text into
   */
  template: string;
};
export type InsightfaceInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * Threshold for the edge map. Default value: `0.5`
   */
  threshold?: number;
  /**
   * Size of the detection. Default value: `640`
   */
  det_size_width?: number;
  /**
   * Size of the detection. Default value: `640`
   */
  det_size_height?: number;
  /**
   * Maximum number of faces to detect. Default value: `1`
   */
  max_face_num?: number;
  /**
   * URL of the model weights. Default value: `"buffalo_l"`
   */
  model_url?: string | Blob | File;
  /**
   * Sorting of the faces. Default value: `"size"`
   */
  sorting?: string;
  /**
   * Whether to run in sync mode. Default value: `true`
   */
  sync_mode?: boolean;
};
export type InsightfaceOutput = {
  /**
   * faces detected sorted by size
   */
  faces: Array<FaceDetection>;
  /**
   * Bounding box of the face.
   */
  bbox: Array<number>;
  /**
   * Keypoints of the face.
   */
  kps?: Array<Array<number>>;
  /**
   * Keypoints of the face on the image.
   */
  kps_image: Image;
  /**
   * Confidence score of the detection.
   */
  det_score: number;
  /**
   * Embedding of the face.
   */
  embedding_file: File;
  /**
   * Either M or F if available.
   */
  sex?: string;
};
export type InvertMaskOutput = {
  /**
   * The mask
   */
  image: Image;
};
export type IpAdapterFaceIdInput = {
  /**
   * The model type to use. 1_5 is the default and is recommended for most use cases. Default value: `"1_5-v1"`
   */
  model_type?:
    | "1_5-v1"
    | "1_5-v1-plus"
    | "1_5-v2-plus"
    | "SDXL-v1"
    | "SDXL-v2-plus"
    | "1_5-auraface-v1";
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * An image of a face to match. If an image with a size of 640x640 is not provided, it will be scaled and cropped to that size.
   */
  face_image_url?: string | Blob | File;
  /**
   * URL to zip archive with images of faces. The images embedding will be averaged to
   * create a more accurate face id.
   */
  face_images_data_url?: string | Blob | File;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `"blurry, low resolution, bad, ugly, low quality, pixelated, interpolated, compression artifacts, noisey, grainy"`
   */
  negative_prompt?: string;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * The number of inference steps to use for generating the image. The more steps
   * the better the image will be but it will also take longer to generate. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * The number of samples for face id. The more samples the better the image will
   * be but it will also take longer to generate. Default is 4. Default value: `4`
   */
  num_samples?: number;
  /**
   * The width of the generated image. Default value: `512`
   */
  width?: number;
  /**
   * The height of the generated image. Default value: `512`
   */
  height?: number;
  /**
   * The size of the face detection model. The higher the number the more accurate
   * the detection will be but it will also take longer to run. The higher the number the more
   * likely it will fail to find a face as well. Lower it if you are having trouble
   * finding a face in the image. Default value: `640`
   */
  face_id_det_size?: number;
  /**
   * The URL to the base 1.5 model. Default is SG161222/Realistic_Vision_V4.0_noVAE Default value: `"SG161222/Realistic_Vision_V4.0_noVAE"`
   */
  base_1_5_model_repo?: string;
  /**
   * The URL to the base SDXL model. Default is SG161222/RealVisXL_V3.0 Default value: `"SG161222/RealVisXL_V3.0"`
   */
  base_sdxl_model_repo?: string;
};
export type IpAdapterFaceIdOutput = {
  /**
   * The generated image file info.
   */
  image: Image;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
};
export type KlingV15KolorsVirtualTryOnInput = {
  /**
   * Url for the human image.
   */
  human_image_url: string | Blob | File;
  /**
   * Url to the garment image.
   */
  garment_image_url: string | Blob | File;
};
export type KlingV15KolorsVirtualTryOnOutput = {
  /**
   * The output image.
   */
  image: Image;
};
export type KlingVideoV15ProImageToVideoInput = {
  /**
   *
   */
  prompt: string;
  /**
   *
   */
  image_url: string | Blob | File;
  /**
   * The duration of the generated video in seconds Default value: `"5"`
   */
  duration?: "5" | "10";
  /**
   * The aspect ratio of the generated video frame Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16" | "1:1";
};
export type KlingVideoV15ProImageToVideoOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type KlingVideoV15ProTextToVideoInput = {
  /**
   *
   */
  prompt: string;
  /**
   * The duration of the generated video in seconds Default value: `"5"`
   */
  duration?: "5" | "10";
  /**
   * The aspect ratio of the generated video frame Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16" | "1:1";
};
export type KlingVideoV15ProTextToVideoOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type KlingVideoV16ProImageToVideoInput = {
  /**
   *
   */
  prompt: string;
  /**
   *
   */
  image_url: string | Blob | File;
  /**
   * The duration of the generated video in seconds Default value: `"5"`
   */
  duration?: "5" | "10";
  /**
   * The aspect ratio of the generated video frame Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16" | "1:1";
};
export type KlingVideoV16ProImageToVideoOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type KlingVideoV16StandardImageToVideoInput = {
  /**
   *
   */
  prompt: string;
  /**
   *
   */
  image_url: string | Blob | File;
  /**
   * The duration of the generated video in seconds Default value: `"5"`
   */
  duration?: "5" | "10";
  /**
   * The aspect ratio of the generated video frame Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16" | "1:1";
};
export type KlingVideoV16StandardImageToVideoOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type KlingVideoV16StandardTextToVideoInput = {
  /**
   *
   */
  prompt: string;
  /**
   * The duration of the generated video in seconds Default value: `"5"`
   */
  duration?: "5" | "10";
  /**
   * The aspect ratio of the generated video frame Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16" | "1:1";
};
export type KlingVideoV16StandardTextToVideoOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type KlingVideoV1ProImageToVideoInput = {
  /**
   *
   */
  prompt: string;
  /**
   *
   */
  image_url: string | Blob | File;
  /**
   * The duration of the generated video in seconds Default value: `"5"`
   */
  duration?: "5" | "10";
  /**
   * The aspect ratio of the generated video frame Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16" | "1:1";
};
export type KlingVideoV1ProImageToVideoOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type KlingVideoV1ProTextToVideoInput = {
  /**
   *
   */
  prompt: string;
  /**
   * The duration of the generated video in seconds Default value: `"5"`
   */
  duration?: "5" | "10";
  /**
   * The aspect ratio of the generated video frame Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16" | "1:1";
};
export type KlingVideoV1ProTextToVideoOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type KlingVideoV1StandardImageToVideoInput = {
  /**
   *
   */
  prompt: string;
  /**
   *
   */
  image_url: string | Blob | File;
  /**
   * The duration of the generated video in seconds Default value: `"5"`
   */
  duration?: "5" | "10";
  /**
   * The aspect ratio of the generated video frame Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16" | "1:1";
};
export type KlingVideoV1StandardImageToVideoOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type KlingVideoV1StandardTextToVideoInput = {
  /**
   *
   */
  prompt: string;
  /**
   * The duration of the generated video in seconds Default value: `"5"`
   */
  duration?: "5" | "10";
  /**
   * The aspect ratio of the generated video frame Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16" | "1:1";
};
export type KlingVideoV1StandardTextToVideoOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type KolorsImageToImageInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small
   * details (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show
   * you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * The number of inference steps to perform. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * Seed
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and
   * uploaded before returning the response. This will increase the latency of
   * the function but it allows you to get the image directly in the response
   * without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * Enable safety checker. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The scheduler to use for the model. Default value: `"EulerDiscreteScheduler"`
   */
  scheduler?:
    | "EulerDiscreteScheduler"
    | "EulerAncestralDiscreteScheduler"
    | "DPMSolverMultistepScheduler"
    | "DPMSolverMultistepScheduler_SDE_karras"
    | "UniPCMultistepScheduler"
    | "DEISMultistepScheduler";
  /**
   * The format of the generated image. Default value: `"png"`
   */
  output_format?: "jpeg" | "png";
  /**
   * URL of image to use for image to image
   */
  image_url: string | Blob | File;
  /**
   * The strength to use for image-to-image. 1.0 is completely remakes the image while 0.0 preserves the original. Default value: `0.85`
   */
  strength?: number;
};
export type KolorsImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type KolorsImg2ImgInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small
   * details (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show
   * you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * The number of inference steps to perform. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * Seed
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and
   * uploaded before returning the response. This will increase the latency of
   * the function but it allows you to get the image directly in the response
   * without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * Enable safety checker. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The scheduler to use for the model. Default value: `"EulerDiscreteScheduler"`
   */
  scheduler?:
    | "EulerDiscreteScheduler"
    | "EulerAncestralDiscreteScheduler"
    | "DPMSolverMultistepScheduler"
    | "DPMSolverMultistepScheduler_SDE_karras"
    | "UniPCMultistepScheduler"
    | "DEISMultistepScheduler";
  /**
   * The format of the generated image. Default value: `"png"`
   */
  output_format?: "jpeg" | "png";
  /**
   * URL of image to use for image to image
   */
  image_url: string | Blob | File;
  /**
   * The strength to use for image-to-image. 1.0 is completely remakes the image while 0.0 preserves the original. Default value: `0.85`
   */
  strength?: number;
};
export type KolorsInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible
   * for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small
   * details (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show
   * you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * The number of inference steps to perform. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * Seed
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and
   * uploaded before returning the response. This will increase the latency of
   * the function but it allows you to get the image directly in the response
   * without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * Enable safety checker. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The scheduler to use for the model. Default value: `"EulerDiscreteScheduler"`
   */
  scheduler?:
    | "EulerDiscreteScheduler"
    | "EulerAncestralDiscreteScheduler"
    | "DPMSolverMultistepScheduler"
    | "DPMSolverMultistepScheduler_SDE_karras"
    | "UniPCMultistepScheduler"
    | "DEISMultistepScheduler";
  /**
   * The format of the generated image. Default value: `"png"`
   */
  output_format?: "jpeg" | "png";
};
export type KolorsOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type LatentsyncInput = {
  /**
   * The URL of the video to generate the lip sync for.
   */
  video_url: string | Blob | File;
  /**
   * The URL of the audio to generate the lip sync for.
   */
  audio_url: string | Blob | File;
  /**
   * Guidance scale for the model inference Default value: `1`
   */
  guidance_scale?: number;
  /**
   * Random seed for generation Default value: `1247`
   */
  seed?: number;
};
export type LatentsyncOutput = {
  /**
   * The generated video with the lip sync.
   */
  video: File;
};
export type LayerDiffusionInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results. Default value: `""`
   */
  prompt?: string;
  /**
   * The prompt to use for generating the negative image. Be as descriptive as possible for best results. Default value: `"text, watermark"`
   */
  negative_prompt?: string;
  /**
   * The guidance scale for the model. Default value: `8`
   */
  guidance_scale?: number;
  /**
   * The number of inference steps for the model. Default value: `20`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to false, the safety checker will be disabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type LayerDiffusionOutput = {
  /**
   * The URL of the generated image.
   */
  image: Image;
  /**
   * The seed used to generate the image.
   */
  seed: number;
};
export type LcmInput = {
  /**
   * The model to use for generating the image. Default value: `"sdv1-5"`
   */
  model?: "sdxl" | "sdv1-5";
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The base image to use for guiding the image generation on image-to-image
   * generations. If the either width or height of the image is larger than 1024
   * pixels, the image will be resized to 1024 pixels while keeping the aspect ratio.
   */
  image_url?: string | Blob | File;
  /**
   * The mask to use for guiding the image generation on image
   * inpainting. The model will focus on the mask area and try to fill it with
   * the most relevant content.
   *
   * The mask must be a black and white image where the white area is the area
   * that needs to be filled and the black area is the area that should be
   * ignored.
   *
   * The mask must have the same dimensions as the image passed as `image_url`.
   */
  mask_url?: string | Blob | File;
  /**
   * The strength of the image that is passed as `image_url`. The strength
   * determines how much the generated image will be similar to the image passed as
   * `image_url`. The higher the strength the more model gets "creative" and
   * generates an image that's different from the initial image. A strength of 1.0
   * means that the initial image is more or less ignored and the model will try to
   * generate an image that's as close as possible to the prompt. Default value: `0.8`
   */
  strength?: number;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `1`
   */
  guidance_scale?: number;
  /**
   * The number of inference steps to use for generating the image. The more steps
   * the better the image will be but it will also take longer to generate. Default value: `4`
   */
  num_inference_steps?: number;
  /**
   * The size of the generated image. You can choose between some presets or
   * custom height and width that **must be multiples of 8**.
   *
   * If not provided:
   * - For text-to-image generations, the default size is 512x512.
   * - For image-to-image generations, the default size is the same as the input image.
   * - For inpainting generations, the default size is the same as the input image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. The function will return a list of images
   * with the same prompt and negative prompt but different seeds. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the resulting image will be checked whether it includes any
   * potentially unsafe content. If it does, it will be replaced with a black
   * image. Default value: `true`
   */
  enable_safety_checks?: boolean;
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
  /**
   * If set to true, the inpainting pipeline will only inpaint the provided mask
   * area. Only effective for inpainting pipelines.
   */
  inpaint_mask_only?: boolean;
  /**
   * If set to true, the inpainting pipeline will use controlnet inpainting.
   * Only effective for inpainting pipelines.
   */
  controlnet_inpaint?: boolean;
  /**
   * The url of the lora server to use for image generation.
   */
  lora_url?: string | Blob | File;
  /**
   * The scale of the lora server to use for image generation. Default value: `1`
   */
  lora_scale?: number;
};
export type LcmOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Number of inference steps used to generate the image. It will be the same value of the one passed in the
   * input or the default one in case none was passed. Default value: `4`
   */
  num_inference_steps?: number;
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
  /**
   * A list of booleans indicating whether the generated image contains any
   * potentially unsafe content. If the safety check is disabled, this field
   * will all will be false.
   */
  nsfw_content_detected: Array<boolean>;
};
export type LcmSd15I2iInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The image to use as a base.
   */
  image_url: string | Blob | File;
  /**
   * The strength of the image. Default value: `0.8`
   */
  strength?: number;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `1`
   */
  guidance_scale?: number;
  /**
   * The number of inference steps to use for generating the image. The more steps
   * the better the image will be but it will also take longer to generate. Default value: `4`
   */
  num_inference_steps?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. The function will return a list of images
   * with the same prompt and negative prompt but different seeds. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the resulting image will be checked whether it includes any
   * potentially unsafe content. If it does, it will be replaced with a black
   * image. Default value: `true`
   */
  enable_safety_checks?: boolean;
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
};
export type LcmSd15I2iOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Number of inference steps used to generate the image. It will be the same value of the one passed in the
   * input or the default one in case none was passed. Default value: `4`
   */
  num_inference_steps?: number;
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
  /**
   * A list of booleans indicating whether the generated image contains any
   * potentially unsafe content. If the safety check is disabled, this field
   * will have a false for each generated image.
   */
  nsfw_content_detected: Array<boolean>;
};
export type LDMTTSInput = {
  /**
   * The dialogue text with turn prefixes to distinguish speakers.
   */
  input: string;
  /**
   * A list of voice definitions for each speaker in the dialogue. Must be between 1 and 2 voices. Default value: `[object Object],[object Object]`
   */
  voices?: Array<LDMVoiceInput>;
  /**
   * S3 URI of the autoregressive (AR) model.
   */
  ar?: string;
  /**
   * S3 URI of the AR LoRA model.
   */
  lora?: string;
  /**
   * S3 URI of the vocoder model.
   */
  vocoder?: string;
};
export type LDMTTSOutput = {
  /**
   * The generated audio file.
   */
  audio: AudioFile;
};
export type LDMVoiceInput = {
  /**
   * The unique ID of a PlayHT or Cloned Voice, or a name from the available presets.
   */
  voice: string;
  /**
   * A prefix to identify the speaker in multi-turn dialogues. Default value: `"Speaker 1: "`
   */
  turn_prefix?: string;
};
export type LeffaPoseTransferInput = {
  /**
   * The number of inference steps to perform. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same input given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your input when generating the image. Default value: `2.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"png"`
   */
  output_format?: "jpeg" | "png";
  /**
   * Url for the human image.
   */
  pose_image_url: string | Blob | File;
  /**
   * Url to the garment image.
   */
  person_image_url: string | Blob | File;
};
export type LeffaPoseTransferOutput = {
  /**
   * The output image.
   */
  image: Image;
  /**
   * The seed for the inference.
   */
  seed: number;
  /**
   * Whether the image contains NSFW concepts.
   */
  has_nsfw_concepts: boolean;
};
export type LeffaVirtualTryonInput = {
  /**
   * The number of inference steps to perform. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same input given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your input when generating the image. Default value: `2.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"png"`
   */
  output_format?: "jpeg" | "png";
  /**
   * Url for the human image.
   */
  human_image_url: string | Blob | File;
  /**
   * Url to the garment image.
   */
  garment_image_url: string | Blob | File;
};
export type LeffaVirtualTryonOutput = {
  /**
   * The output image.
   */
  image: Image;
  /**
   * The seed for the inference.
   */
  seed: number;
  /**
   * Whether the image contains NSFW concepts.
   */
  has_nsfw_concepts: boolean;
};
export type LightningModelsImageToImageInput = {
  /**
   * The Lightning model to use.
   */
  model_name?: string;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   *  Default value: `[object Object]`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `5`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `2`
   */
  guidance_scale?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * Scheduler / sampler to use for the image denoising process.
   */
  scheduler?:
    | "DPM++ 2M"
    | "DPM++ 2M Karras"
    | "DPM++ 2M SDE"
    | "DPM++ 2M SDE Karras"
    | "DPM++ SDE"
    | "DPM++ SDE Karras"
    | "KDPM 2A"
    | "Euler"
    | "Euler (trailing timesteps)"
    | "Euler A"
    | "LCM"
    | "EDMDPMSolverMultistepScheduler"
    | "TCDScheduler";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
};
export type LightningModelsInpaintingInput = {
  /**
   * The Lightning model to use.
   */
  model_name?: string;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   *  Default value: `[object Object]`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `5`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `2`
   */
  guidance_scale?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * Scheduler / sampler to use for the image denoising process.
   */
  scheduler?:
    | "DPM++ 2M"
    | "DPM++ 2M Karras"
    | "DPM++ 2M SDE"
    | "DPM++ 2M SDE Karras"
    | "DPM++ SDE"
    | "DPM++ SDE Karras"
    | "KDPM 2A"
    | "Euler"
    | "Euler (trailing timesteps)"
    | "Euler A"
    | "LCM"
    | "EDMDPMSolverMultistepScheduler"
    | "TCDScheduler";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
};
export type LightningModelsInput = {
  /**
   * The Lightning model to use.
   */
  model_name?: string;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want in the image. Default value: `"(worst quality, low quality, normal quality, lowres, low details, oversaturated, undersaturated, overexposed, underexposed, grayscale, bw, bad photo, bad photography, bad art:1.4), (watermark, signature, text font, username, error, logo, words, letters, digits, autograph, trademark, name:1.2), (blur, blurry, grainy), morbid, ugly, asymmetrical, mutated malformed, mutilated, poorly lit, bad shadow, draft, cropped, out of frame, cut off, censored, jpeg artifacts, out of focus, glitch, duplicate, (airbrushed, cartoon, anime, semi-realistic, cgi, render, blender, digital art, manga, amateur:1.3), (3D ,3D Game, 3D Game Scene, 3D Character:1.1), (bad hands, bad anatomy, bad body, bad face, bad teeth, bad arms, bad legs, deformities:1.3)"`
   */
  negative_prompt?: string;
  /**
   *  Default value: `[object Object]`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `5`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `2`
   */
  guidance_scale?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * Scheduler / sampler to use for the image denoising process.
   */
  scheduler?:
    | "DPM++ 2M"
    | "DPM++ 2M Karras"
    | "DPM++ 2M SDE"
    | "DPM++ 2M SDE Karras"
    | "DPM++ SDE"
    | "DPM++ SDE Karras"
    | "KDPM 2A"
    | "Euler"
    | "Euler (trailing timesteps)"
    | "Euler A"
    | "LCM"
    | "EDMDPMSolverMultistepScheduler"
    | "TCDScheduler";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
};
export type LightningModelsOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type LineartInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
  /**
   * Whether to use the coarse model
   */
  coarse?: boolean;
};
export type LineartOutput = {
  /**
   * Image with edges detected using the Canny algorithm
   */
  image: Image;
};
export type LivePortraitImageInput = {
  /**
   * URL of the image to be animated
   */
  image_url: string | Blob | File;
  /**
   * Amount to blink the eyes
   */
  blink?: number;
  /**
   * Amount to raise or lower eyebrows
   */
  eyebrow?: number;
  /**
   * Amount to wink
   */
  wink?: number;
  /**
   * Amount to move pupils horizontally
   */
  pupil_x?: number;
  /**
   * Amount to move pupils vertically
   */
  pupil_y?: number;
  /**
   * Amount to open mouth in 'aaa' shape
   */
  aaa?: number;
  /**
   * Amount to shape mouth in 'eee' position
   */
  eee?: number;
  /**
   * Amount to shape mouth in 'woo' position
   */
  woo?: number;
  /**
   * Amount to smile
   */
  smile?: number;
  /**
   * Amount to rotate the face in pitch
   */
  rotate_pitch?: number;
  /**
   * Amount to rotate the face in yaw
   */
  rotate_yaw?: number;
  /**
   * Amount to rotate the face in roll
   */
  rotate_roll?: number;
  /**
   * Whether to paste-back/stitch the animated face cropping from the face-cropping space to the original image space. Default value: `true`
   */
  flag_pasteback?: boolean;
  /**
   * Whether to crop the source portrait to the face-cropping space. Default value: `true`
   */
  flag_do_crop?: boolean;
  /**
   * Whether to conduct the rotation when flag_do_crop is True. Default value: `true`
   */
  flag_do_rot?: boolean;
  /**
   * Size of the output image. Default value: `512`
   */
  dsize?: number;
  /**
   * Scaling factor for the face crop. Default value: `2.3`
   */
  scale?: number;
  /**
   * Horizontal offset ratio for face crop.
   */
  vx_ratio?: number;
  /**
   * Vertical offset ratio for face crop. Positive values move up, negative values move down. Default value: `-0.125`
   */
  vy_ratio?: number;
  /**
   * Whether to enable the safety checker. If enabled, the model will check if the input image contains a face before processing it.
   * The safety checker will process the input image
   */
  enable_safety_checker?: boolean;
  /**
   * Output format Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
};
export type LivePortraitImageOutput = {
  /**
   * The generated image file.
   */
  image: Image;
};
export type LivePortraitInput = {
  /**
   * URL of the video to drive the lip syncing.
   */
  video_url: string | Blob | File;
  /**
   * URL of the image to be animated
   */
  image_url: string | Blob | File;
  /**
   * Amount to blink the eyes
   */
  blink?: number;
  /**
   * Amount to raise or lower eyebrows
   */
  eyebrow?: number;
  /**
   * Amount to wink
   */
  wink?: number;
  /**
   * Amount to move pupils horizontally
   */
  pupil_x?: number;
  /**
   * Amount to move pupils vertically
   */
  pupil_y?: number;
  /**
   * Amount to open mouth in 'aaa' shape
   */
  aaa?: number;
  /**
   * Amount to shape mouth in 'eee' position
   */
  eee?: number;
  /**
   * Amount to shape mouth in 'woo' position
   */
  woo?: number;
  /**
   * Amount to smile
   */
  smile?: number;
  /**
   * Whether to set the lip to closed state before animation. Only takes effect when flag_eye_retargeting and flag_lip_retargeting are False. Default value: `true`
   */
  flag_lip_zero?: boolean;
  /**
   * Amount to rotate the face in pitch
   */
  rotate_pitch?: number;
  /**
   * Amount to rotate the face in yaw
   */
  rotate_yaw?: number;
  /**
   * Amount to rotate the face in roll
   */
  rotate_roll?: number;
  /**
   * Whether to enable eye retargeting.
   */
  flag_eye_retargeting?: boolean;
  /**
   * Whether to enable lip retargeting.
   */
  flag_lip_retargeting?: boolean;
  /**
   * Whether to enable stitching. Recommended to set to True. Default value: `true`
   */
  flag_stitching?: boolean;
  /**
   * Whether to use relative motion. Default value: `true`
   */
  flag_relative?: boolean;
  /**
   * Whether to paste-back/stitch the animated face cropping from the face-cropping space to the original image space. Default value: `true`
   */
  flag_pasteback?: boolean;
  /**
   * Whether to crop the source portrait to the face-cropping space. Default value: `true`
   */
  flag_do_crop?: boolean;
  /**
   * Whether to conduct the rotation when flag_do_crop is True. Default value: `true`
   */
  flag_do_rot?: boolean;
  /**
   * Size of the output image. Default value: `512`
   */
  dsize?: number;
  /**
   * Scaling factor for the face crop. Default value: `2.3`
   */
  scale?: number;
  /**
   * Horizontal offset ratio for face crop.
   */
  vx_ratio?: number;
  /**
   * Vertical offset ratio for face crop. Positive values move up, negative values move down. Default value: `-0.125`
   */
  vy_ratio?: number;
  /**
   * Batch size for the model. The larger the batch size, the faster the model will run, but the more memory it will consume. Default value: `32`
   */
  batch_size?: number;
  /**
   * Whether to enable the safety checker. If enabled, the model will check if the input image contains a face before processing it.
   * The safety checker will process the input image
   */
  enable_safety_checker?: boolean;
};
export type LivePortraitOutput = {
  /**
   * The generated video file.
   */
  video: File;
};
export type LlavaNextInput = {
  /**
   * URL of the image to be processed
   */
  image_url: string | Blob | File;
  /**
   * Prompt to be used for the image
   */
  prompt: string;
  /**
   * Maximum number of tokens to generate Default value: `64`
   */
  max_tokens?: number;
  /**
   * Temperature for sampling Default value: `0.2`
   */
  temperature?: number;
  /**
   * Top P for sampling Default value: `1`
   */
  top_p?: number;
};
export type LlavaNextOutput = {
  /**
   * Generated output
   */
  output: string;
  /**
   * Whether the output is partial
   */
  partial?: boolean;
};
export type Llavav1513bInput = {
  /**
   * URL of the image to be processed
   */
  image_url: string | Blob | File;
  /**
   * Prompt to be used for the image
   */
  prompt: string;
  /**
   * Maximum number of tokens to generate Default value: `64`
   */
  max_tokens?: number;
  /**
   * Temperature for sampling Default value: `0.2`
   */
  temperature?: number;
  /**
   * Top P for sampling Default value: `1`
   */
  top_p?: number;
};
export type Llavav1513bOutput = {
  /**
   * Generated output
   */
  output: string;
  /**
   * Whether the output is partial
   */
  partial?: boolean;
};
export type LoraImageToImageInput = {
  /**
   * URL or HuggingFace ID of the base model to generate the image.
   */
  model_name: string;
  /**
   * URL or HuggingFace ID of the custom U-Net model to use for the image generation.
   */
  unet_name?: string;
  /**
   * The variant of the model to use for huggingface models, e.g. 'fp16'.
   */
  variant?: string;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * If set to true, the prompt weighting syntax will be used.
   * Additionally, this will lift the 77 token limit by averaging embeddings.
   */
  prompt_weighting?: boolean;
  /**
   * URL of image to use for image to image/inpainting.
   */
  image_url?: string | Blob | File;
  /**
   * The amount of noise to add to noise image for image. Only used if the image_url is provided. 1.0 is complete noise and 0 is no noise. Default value: `0.5`
   */
  noise_strength?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The embeddings to use for the image generation. Only a single embedding is supported at the moment.
   * The embeddings will be used to map the tokens in the prompt to the embedding weights. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * The control nets to use for the image generation. You can use any number of control nets
   * and they will be applied to the image at the specified timesteps. Default value: ``
   */
  controlnets?: Array<ControlNet>;
  /**
   * If set to true, the controlnet will be applied to only the conditional predictions.
   */
  controlnet_guess_mode?: boolean;
  /**
   * The IP adapter to use for the image generation. Default value: ``
   */
  ip_adapter?: Array<IPAdapter>;
  /**
   * The path to the image encoder model to use for the image generation.
   */
  image_encoder_path?: string;
  /**
   * The subfolder of the image encoder model to use for the image generation.
   */
  image_encoder_subfolder?: string;
  /**
   * The weight name of the image encoder model to use for the image generation. Default value: `"pytorch_model.bin"`
   */
  image_encoder_weight_name?: string;
  /**
   * The URL of the IC Light model to use for the image generation.
   */
  ic_light_model_url?: string | Blob | File;
  /**
   * The URL of the IC Light model background image to use for the image generation.
   * Make sure to use a background compatible with the model.
   */
  ic_light_model_background_image_url?: string | Blob | File;
  /**
   * The URL of the IC Light model image to use for the image generation.
   */
  ic_light_image_url?: string | Blob | File;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Increasing the amount of steps tells Stable Diffusion that it should take more steps
   * to generate your final result which can increase the amount of detail in your image. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * Skips part of the image generation process, leading to slightly different results.
   * This means the image renders faster, too.
   */
  clip_skip?: number;
  /**
   * Scheduler / sampler to use for the image denoising process.
   */
  scheduler?:
    | "DPM++ 2M"
    | "DPM++ 2M Karras"
    | "DPM++ 2M SDE"
    | "DPM++ 2M SDE Karras"
    | "Euler"
    | "Euler A"
    | "Euler (trailing timesteps)"
    | "LCM"
    | "LCM (trailing timesteps)"
    | "DDIM"
    | "TCD";
  /**
   * Optionally override the timesteps to use for the denoising process. Only works with schedulers which support the `timesteps` argument in their `set_timesteps` method.
   * Defaults to not overriding, in which case the scheduler automatically sets the timesteps based on the `num_inference_steps` parameter.
   * If set to a custom timestep schedule, the `num_inference_steps` parameter will be ignored. Cannot be set if `sigmas` is set. Default value: `[object Object]`
   */
  timesteps?: TimestepsInput;
  /**
   * Optionally override the sigmas to use for the denoising process. Only works with schedulers which support the `sigmas` argument in their `set_sigmas` method.
   * Defaults to not overriding, in which case the scheduler automatically sets the sigmas based on the `num_inference_steps` parameter.
   * If set to a custom sigma schedule, the `num_inference_steps` parameter will be ignored. Cannot be set if `timesteps` is set. Default value: `[object Object]`
   */
  sigmas?: SigmasInput;
  /**
   * The type of prediction to use for the image generation.
   * The `epsilon` is the default. Default value: `"epsilon"`
   */
  prediction_type?: "v_prediction" | "epsilon";
  /**
   * Whether to set the rescale_betas_snr_zero option or not for the sampler
   */
  rescale_betas_snr_zero?: boolean;
  /**
   * The format of the generated image. Default value: `"png"`
   */
  image_format?: "jpeg" | "png";
  /**
   * Number of images to generate in one request. Note that the higher the batch size,
   * the longer it will take to generate the images. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * The size of the tiles to be used for the image generation. Default value: `4096`
   */
  tile_width?: number;
  /**
   * The size of the tiles to be used for the image generation. Default value: `4096`
   */
  tile_height?: number;
  /**
   * The stride of the tiles to be used for the image generation. Default value: `2048`
   */
  tile_stride_width?: number;
  /**
   * The stride of the tiles to be used for the image generation. Default value: `2048`
   */
  tile_stride_height?: number;
  /**
   * The eta value to be used for the image generation.
   */
  eta?: number;
  /**
   * If set to true, the latents will be saved for debugging.
   */
  debug_latents?: boolean;
  /**
   * If set to true, the latents will be saved for debugging per pass.
   */
  debug_per_pass_latents?: boolean;
};
export type LoraImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The latents saved for debugging.
   */
  debug_latents?: File;
  /**
   * The latents saved for debugging per pass.
   */
  debug_per_pass_latents?: File;
};
export type LoraInpaintInput = {
  /**
   * URL or HuggingFace ID of the base model to generate the image.
   */
  model_name: string;
  /**
   * URL or HuggingFace ID of the custom U-Net model to use for the image generation.
   */
  unet_name?: string;
  /**
   * The variant of the model to use for huggingface models, e.g. 'fp16'.
   */
  variant?: string;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * If set to true, the prompt weighting syntax will be used.
   * Additionally, this will lift the 77 token limit by averaging embeddings.
   */
  prompt_weighting?: boolean;
  /**
   * URL of image to use for image to image/inpainting.
   */
  image_url?: string | Blob | File;
  /**
   * URL of black-and-white image to use as mask during inpainting.
   */
  mask_url?: string | Blob | File;
  /**
   * The amount of noise to add to noise image for image. Only used if the image_url is provided. 1.0 is complete noise and 0 is no noise. Default value: `0.5`
   */
  noise_strength?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The embeddings to use for the image generation. Only a single embedding is supported at the moment.
   * The embeddings will be used to map the tokens in the prompt to the embedding weights. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * The control nets to use for the image generation. You can use any number of control nets
   * and they will be applied to the image at the specified timesteps. Default value: ``
   */
  controlnets?: Array<ControlNet>;
  /**
   * If set to true, the controlnet will be applied to only the conditional predictions.
   */
  controlnet_guess_mode?: boolean;
  /**
   * The IP adapter to use for the image generation. Default value: ``
   */
  ip_adapter?: Array<IPAdapter>;
  /**
   * The path to the image encoder model to use for the image generation.
   */
  image_encoder_path?: string;
  /**
   * The subfolder of the image encoder model to use for the image generation.
   */
  image_encoder_subfolder?: string;
  /**
   * The weight name of the image encoder model to use for the image generation. Default value: `"pytorch_model.bin"`
   */
  image_encoder_weight_name?: string;
  /**
   * The URL of the IC Light model to use for the image generation.
   */
  ic_light_model_url?: string | Blob | File;
  /**
   * The URL of the IC Light model background image to use for the image generation.
   * Make sure to use a background compatible with the model.
   */
  ic_light_model_background_image_url?: string | Blob | File;
  /**
   * The URL of the IC Light model image to use for the image generation.
   */
  ic_light_image_url?: string | Blob | File;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * Increasing the amount of steps tells Stable Diffusion that it should take more steps
   * to generate your final result which can increase the amount of detail in your image. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * Skips part of the image generation process, leading to slightly different results.
   * This means the image renders faster, too.
   */
  clip_skip?: number;
  /**
   * Scheduler / sampler to use for the image denoising process.
   */
  scheduler?:
    | "DPM++ 2M"
    | "DPM++ 2M Karras"
    | "DPM++ 2M SDE"
    | "DPM++ 2M SDE Karras"
    | "Euler"
    | "Euler A"
    | "Euler (trailing timesteps)"
    | "LCM"
    | "LCM (trailing timesteps)"
    | "DDIM"
    | "TCD";
  /**
   * Optionally override the timesteps to use for the denoising process. Only works with schedulers which support the `timesteps` argument in their `set_timesteps` method.
   * Defaults to not overriding, in which case the scheduler automatically sets the timesteps based on the `num_inference_steps` parameter.
   * If set to a custom timestep schedule, the `num_inference_steps` parameter will be ignored. Cannot be set if `sigmas` is set. Default value: `[object Object]`
   */
  timesteps?: TimestepsInput;
  /**
   * Optionally override the sigmas to use for the denoising process. Only works with schedulers which support the `sigmas` argument in their `set_sigmas` method.
   * Defaults to not overriding, in which case the scheduler automatically sets the sigmas based on the `num_inference_steps` parameter.
   * If set to a custom sigma schedule, the `num_inference_steps` parameter will be ignored. Cannot be set if `timesteps` is set. Default value: `[object Object]`
   */
  sigmas?: SigmasInput;
  /**
   * The type of prediction to use for the image generation.
   * The `epsilon` is the default. Default value: `"epsilon"`
   */
  prediction_type?: "v_prediction" | "epsilon";
  /**
   * Whether to set the rescale_betas_snr_zero option or not for the sampler
   */
  rescale_betas_snr_zero?: boolean;
  /**
   * The format of the generated image. Default value: `"png"`
   */
  image_format?: "jpeg" | "png";
  /**
   * Number of images to generate in one request. Note that the higher the batch size,
   * the longer it will take to generate the images. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * The size of the tiles to be used for the image generation. Default value: `4096`
   */
  tile_width?: number;
  /**
   * The size of the tiles to be used for the image generation. Default value: `4096`
   */
  tile_height?: number;
  /**
   * The stride of the tiles to be used for the image generation. Default value: `2048`
   */
  tile_stride_width?: number;
  /**
   * The stride of the tiles to be used for the image generation. Default value: `2048`
   */
  tile_stride_height?: number;
  /**
   * The eta value to be used for the image generation.
   */
  eta?: number;
  /**
   * If set to true, the latents will be saved for debugging.
   */
  debug_latents?: boolean;
  /**
   * If set to true, the latents will be saved for debugging per pass.
   */
  debug_per_pass_latents?: boolean;
};
export type LoraInpaintOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The latents saved for debugging.
   */
  debug_latents?: File;
  /**
   * The latents saved for debugging per pass.
   */
  debug_per_pass_latents?: File;
};
export type LoraInput = {
  /**
   * URL or HuggingFace ID of the base model to generate the image.
   */
  model_name: string;
  /**
   * URL or HuggingFace ID of the custom U-Net model to use for the image generation.
   */
  unet_name?: string;
  /**
   * The variant of the model to use for huggingface models, e.g. 'fp16'.
   */
  variant?: string;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * If set to true, the prompt weighting syntax will be used.
   * Additionally, this will lift the 77 token limit by averaging embeddings.
   */
  prompt_weighting?: boolean;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The embeddings to use for the image generation. Only a single embedding is supported at the moment.
   * The embeddings will be used to map the tokens in the prompt to the embedding weights. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * The control nets to use for the image generation. You can use any number of control nets
   * and they will be applied to the image at the specified timesteps. Default value: ``
   */
  controlnets?: Array<ControlNet>;
  /**
   * If set to true, the controlnet will be applied to only the conditional predictions.
   */
  controlnet_guess_mode?: boolean;
  /**
   * The IP adapter to use for the image generation. Default value: ``
   */
  ip_adapter?: Array<IPAdapter>;
  /**
   * The path to the image encoder model to use for the image generation.
   */
  image_encoder_path?: string;
  /**
   * The subfolder of the image encoder model to use for the image generation.
   */
  image_encoder_subfolder?: string;
  /**
   * The weight name of the image encoder model to use for the image generation. Default value: `"pytorch_model.bin"`
   */
  image_encoder_weight_name?: string;
  /**
   * The URL of the IC Light model to use for the image generation.
   */
  ic_light_model_url?: string | Blob | File;
  /**
   * The URL of the IC Light model background image to use for the image generation.
   * Make sure to use a background compatible with the model.
   */
  ic_light_model_background_image_url?: string | Blob | File;
  /**
   * The URL of the IC Light model image to use for the image generation.
   */
  ic_light_image_url?: string | Blob | File;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The size of the generated image. You can choose between some presets or custom height and width
   * that **must be multiples of 8**. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * Increasing the amount of steps tells Stable Diffusion that it should take more steps
   * to generate your final result which can increase the amount of detail in your image. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * Skips part of the image generation process, leading to slightly different results.
   * This means the image renders faster, too.
   */
  clip_skip?: number;
  /**
   * Scheduler / sampler to use for the image denoising process.
   */
  scheduler?:
    | "DPM++ 2M"
    | "DPM++ 2M Karras"
    | "DPM++ 2M SDE"
    | "DPM++ 2M SDE Karras"
    | "Euler"
    | "Euler A"
    | "Euler (trailing timesteps)"
    | "LCM"
    | "LCM (trailing timesteps)"
    | "DDIM"
    | "TCD";
  /**
   * Optionally override the timesteps to use for the denoising process. Only works with schedulers which support the `timesteps` argument in their `set_timesteps` method.
   * Defaults to not overriding, in which case the scheduler automatically sets the timesteps based on the `num_inference_steps` parameter.
   * If set to a custom timestep schedule, the `num_inference_steps` parameter will be ignored. Cannot be set if `sigmas` is set. Default value: `[object Object]`
   */
  timesteps?: TimestepsInput;
  /**
   * Optionally override the sigmas to use for the denoising process. Only works with schedulers which support the `sigmas` argument in their `set_sigmas` method.
   * Defaults to not overriding, in which case the scheduler automatically sets the sigmas based on the `num_inference_steps` parameter.
   * If set to a custom sigma schedule, the `num_inference_steps` parameter will be ignored. Cannot be set if `timesteps` is set. Default value: `[object Object]`
   */
  sigmas?: SigmasInput;
  /**
   * The type of prediction to use for the image generation.
   * The `epsilon` is the default. Default value: `"epsilon"`
   */
  prediction_type?: "v_prediction" | "epsilon";
  /**
   * Whether to set the rescale_betas_snr_zero option or not for the sampler
   */
  rescale_betas_snr_zero?: boolean;
  /**
   * The format of the generated image. Default value: `"png"`
   */
  image_format?: "jpeg" | "png";
  /**
   * Number of images to generate in one request. Note that the higher the batch size,
   * the longer it will take to generate the images. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * The size of the tiles to be used for the image generation. Default value: `4096`
   */
  tile_width?: number;
  /**
   * The size of the tiles to be used for the image generation. Default value: `4096`
   */
  tile_height?: number;
  /**
   * The stride of the tiles to be used for the image generation. Default value: `2048`
   */
  tile_stride_width?: number;
  /**
   * The stride of the tiles to be used for the image generation. Default value: `2048`
   */
  tile_stride_height?: number;
  /**
   * The eta value to be used for the image generation.
   */
  eta?: number;
  /**
   * If set to true, the latents will be saved for debugging.
   */
  debug_latents?: boolean;
  /**
   * If set to true, the latents will be saved for debugging per pass.
   */
  debug_per_pass_latents?: boolean;
};
export type LoraOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The latents saved for debugging.
   */
  debug_latents?: File;
  /**
   * The latents saved for debugging per pass.
   */
  debug_per_pass_latents?: File;
};
export type LtxVideoImageToVideoInput = {
  /**
   * The prompt to generate the video from.
   */
  prompt: string;
  /**
   * The negative prompt to generate the video from. Default value: `"low quality, worst quality, deformed, distorted, disfigured, motion smear, motion artifacts, fused fingers, bad anatomy, weird hand, ugly"`
   */
  negative_prompt?: string;
  /**
   * The seed to use for random number generation.
   */
  seed?: number;
  /**
   * The number of inference steps to take. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The guidance scale to use. Default value: `3`
   */
  guidance_scale?: number;
  /**
   * The URL of the image to generate the video from.
   */
  image_url: string | Blob | File;
};
export type LtxVideoImageToVideoOutput = {
  /**
   * The generated video.
   */
  video: File;
  /**
   * The seed used for random number generation.
   */
  seed: number;
};
export type LtxVideoInput = {
  /**
   * The prompt to generate the video from.
   */
  prompt: string;
  /**
   * The negative prompt to generate the video from. Default value: `"low quality, worst quality, deformed, distorted, disfigured, motion smear, motion artifacts, fused fingers, bad anatomy, weird hand, ugly"`
   */
  negative_prompt?: string;
  /**
   * The seed to use for random number generation.
   */
  seed?: number;
  /**
   * The number of inference steps to take. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The guidance scale to use. Default value: `3`
   */
  guidance_scale?: number;
};
export type LtxVideoOutput = {
  /**
   * The generated video.
   */
  video: File;
  /**
   * The seed used for random number generation.
   */
  seed: number;
};
export type LumaDreamMachineImageToVideoInput = {
  /**
   *
   */
  prompt: string;
  /**
   *
   */
  image_url: string | Blob | File;
  /**
   * An image to blend the end of the video with
   */
  end_image_url?: string | Blob | File;
  /**
   * The aspect ratio of the generated video Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16" | "4:3" | "3:4" | "21:9" | "9:21";
  /**
   * Whether the video should loop (end of video is blended with the beginning)
   */
  loop?: boolean;
};
export type LumaDreamMachineImageToVideoOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type LumaDreamMachineInput = {
  /**
   *
   */
  prompt: string;
  /**
   * The aspect ratio of the generated video Default value: `"16:9"`
   */
  aspect_ratio?: "16:9" | "9:16" | "4:3" | "3:4" | "21:9" | "9:21";
  /**
   * Whether the video should loop (end of video is blended with the beginning)
   */
  loop?: boolean;
};
export type LumaDreamMachineOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type LumaPhotonFlashInput = {
  /**
   *
   */
  prompt: string;
  /**
   * The aspect ratio of the generated video Default value: `"1:1"`
   */
  aspect_ratio?: "16:9" | "9:16" | "1:1" | "4:3" | "3:4" | "21:9" | "9:21";
};
export type LumaPhotonFlashOutput = {
  /**
   * The generated image
   */
  images: Array<File>;
};
export type LumaPhotonInput = {
  /**
   *
   */
  prompt: string;
  /**
   * The aspect ratio of the generated video Default value: `"1:1"`
   */
  aspect_ratio?: "16:9" | "9:16" | "1:1" | "4:3" | "3:4" | "21:9" | "9:21";
};
export type LumaPhotonOutput = {
  /**
   * The generated image
   */
  images: Array<File>;
};
export type MarigoldDepthMapInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * Number of denoising steps. Defaults to `10`. The higher the number, the more accurate the result, but the slower the inference. Default value: `10`
   */
  num_inference_steps?: number;
  /**
   * Number of predictions to average over. Defaults to `10`. The higher the number, the more accurate the result, but the slower the inference. Default value: `10`
   */
  ensemble_size?: number;
  /**
   * Maximum processing resolution. Defaults `0` which means it uses the size of the input image.
   */
  processing_res?: number;
};
export type MarigoldDepthMapOutput = {
  /**
   * The depth map.
   */
  image: Image;
};
export type MaskInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
};
export type MetadataInput = {
  /**
   * URL of the media file (video or audio) to analyze
   */
  media_url: string | Blob | File;
  /**
   * Whether to extract the start and end frames for videos. Note that when true the request will be slower.
   */
  extract_frames?: boolean;
};
export type MetadataOutput = {
  /**
   * Metadata for the analyzed media file (either Video or Audio)
   */
  media: Video | Audio;
};
export type MiDaSInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
  /**
   * A parameter for the MiDaS detector Default value: `6.283185307179586`
   */
  a?: number;
  /**
   * Background threshold for the MiDaS detector Default value: `0.1`
   */
  background_threshold?: number;
};
export type MiDaSOutput = {
  /**
   * Image with MiDaS depth map
   */
  depth_map: Image;
  /**
   * Image with MiDaS normal map
   */
  normal_map: Image;
};
export type MiniCpmInput = {
  /**
   * List of image URLs to be used for the image description
   */
  image_urls: Array<string>;
  /**
   * Prompt to be used for the image description
   */
  prompt: string;
};
export type MiniCpmOutput = {
  /**
   * Response from the model
   */
  output: string;
};
export type MiniCPMV26ImageInput = {
  /**
   * List of image URLs to be used for the image description
   */
  image_urls: Array<string>;
  /**
   * Prompt to be used for the image description
   */
  prompt: string;
};
export type MiniCPMV26VideoInput = {
  /**
   * URL of the video to be analyzed
   */
  video_url: string | Blob | File;
  /**
   * Prompt to be used for the video description
   */
  prompt: string;
};
export type MiniCpmVideoInput = {
  /**
   * URL of the video to be analyzed
   */
  video_url: string | Blob | File;
  /**
   * Prompt to be used for the video description
   */
  prompt: string;
};
export type MiniCpmVideoOutput = {
  /**
   * Response from the model
   */
  output: string;
};
export type MinimaxMusicInput = {
  /**
   * Lyrics with optional formatting. You can use a newline to separate each line of lyrics. You can use two newlines to add a pause between lines. You can use double hash marks (##) at the beginning and end of the lyrics to add accompaniment. Maximum 600 characters.
   */
  prompt: string;
  /**
   * Reference song, should contain music and vocals. Must be a .wav or .mp3 file longer than 15 seconds.
   */
  reference_audio_url: string | Blob | File;
};
export type MinimaxMusicOutput = {
  /**
   * The generated music
   */
  audio: File;
};
export type MinimaxVideo01ImageToVideoInput = {
  /**
   *
   */
  prompt: string;
  /**
   * URL of the image to use as the first frame
   */
  image_url: string | Blob | File;
  /**
   * Whether to use the model's prompt optimizer Default value: `true`
   */
  prompt_optimizer?: boolean;
};
export type MinimaxVideo01ImageToVideoOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type MinimaxVideo01Input = {
  /**
   *
   */
  prompt: string;
  /**
   * Whether to use the model's prompt optimizer Default value: `true`
   */
  prompt_optimizer?: boolean;
};
export type MinimaxVideo01LiveImageToVideoInput = {
  /**
   *
   */
  prompt: string;
  /**
   * URL of the image to use as the first frame
   */
  image_url: string | Blob | File;
  /**
   * Whether to use the model's prompt optimizer Default value: `true`
   */
  prompt_optimizer?: boolean;
};
export type MinimaxVideo01LiveImageToVideoOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type MinimaxVideo01LiveInput = {
  /**
   *
   */
  prompt: string;
  /**
   * Whether to use the model's prompt optimizer Default value: `true`
   */
  prompt_optimizer?: boolean;
};
export type MinimaxVideo01LiveOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type MinimaxVideo01Output = {
  /**
   * The generated video
   */
  video: File;
};
export type MinimaxVideo01SubjectReferenceInput = {
  /**
   *
   */
  prompt: string;
  /**
   * URL of the subject reference image to use for consistent subject appearance
   */
  subject_reference_image_url: string | Blob | File;
  /**
   * Whether to use the model's prompt optimizer Default value: `true`
   */
  prompt_optimizer?: boolean;
};
export type MinimaxVideo01SubjectReferenceOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type MLSDInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
  /**
   * Score threshold for the MLSD detector Default value: `0.1`
   */
  score_threshold?: number;
  /**
   * Distance threshold for the MLSD detector Default value: `0.1`
   */
  distance_threshold?: number;
};
export type MLSDOutput = {
  /**
   * Image with lines detected using the MLSD detector
   */
  image: Image;
};
export type MmaudioV2Input = {
  /**
   * The URL of the video to generate the audio for.
   */
  video_url: string | Blob | File;
  /**
   * The prompt to generate the audio for.
   */
  prompt: string;
  /**
   * The negative prompt to generate the audio for. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The seed for the random number generator
   */
  seed?: number | null;
  /**
   * The number of steps to generate the audio for. Default value: `25`
   */
  num_steps?: number;
  /**
   * The duration of the audio to generate. Default value: `8`
   */
  duration?: number;
  /**
   * The strength of Classifier Free Guidance. Default value: `4.5`
   */
  cfg_strength?: number;
  /**
   * Whether to mask away the clip.
   */
  mask_away_clip?: boolean;
};
export type MmaudioV2Output = {
  /**
   * The generated video with the lip sync.
   */
  video: File;
};
export type MmaudioV2TextToAudioInput = {
  /**
   * The prompt to generate the audio for.
   */
  prompt: string;
  /**
   * The negative prompt to generate the audio for. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The seed for the random number generator
   */
  seed?: number | null;
  /**
   * The number of steps to generate the audio for. Default value: `25`
   */
  num_steps?: number;
  /**
   * The duration of the audio to generate. Default value: `8`
   */
  duration?: number;
  /**
   * The strength of Classifier Free Guidance. Default value: `4.5`
   */
  cfg_strength?: number;
  /**
   * Whether to mask away the clip.
   */
  mask_away_clip?: boolean;
};
export type MmaudioV2TextToAudioOutput = {
  /**
   * The generated audio.
   */
  audio: File;
};
export type MochiV1Input = {
  /**
   * The prompt to generate a video from.
   */
  prompt: string;
  /**
   * The negative prompt for the video. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The seed to use for generating the video.
   */
  seed?: number;
  /**
   * Whether to enable prompt expansion. Default value: `true`
   */
  enable_prompt_expansion?: boolean;
};
export type MochiV1Output = {
  /**
   * The generated video
   */
  video: File;
};
export type MoondreamBatchedInput = {
  /**
   * Model ID to use for inference Default value: `"vikhyatk/moondream2"`
   */
  model_id?: "vikhyatk/moondream2" | "modelrunner/moondream2-docci";
  /**
   * List of input prompts and image URLs
   */
  inputs: Array<MoondreamInputParam>;
  /**
   * Maximum number of new tokens to generate Default value: `64`
   */
  max_tokens?: number;
  /**
   * Temperature for sampling Default value: `0.2`
   */
  temperature?: number;
  /**
   * Top P for sampling Default value: `1`
   */
  top_p?: number;
  /**
   * Repetition penalty for sampling Default value: `1`
   */
  repetition_penalty?: number;
};
export type MoondreamBatchedOutput = {
  /**
   * List of generated outputs
   */
  outputs: Array<string>;
  /**
   * Whether the output is partial
   */
  partial?: boolean;
  /**
   * Timings for different parts of the process
   */
  timings: any;
  /**
   * Filenames of the images processed
   */
  filenames?: Array<string>;
};
export type MoondreamNextBatchInput = {
  /**
   * List of image URLs to be processed (maximum 32 images)
   */
  images_data_url: string | Blob | File;
  /**
   * Single prompt to apply to all images
   */
  prompt: string;
  /**
   * Maximum number of tokens to generate Default value: `64`
   */
  max_tokens?: number;
};
export type MoondreamNextBatchOutput = {
  /**
   * URL to the generated captions JSON file containing filename-caption pairs.
   */
  captions_file: File;
  /**
   * List of generated captions
   */
  outputs: Array<string>;
};
export type MoondreamNextDetectionInput = {
  /**
   * Image URL to be processed
   */
  image_url: string | Blob | File;
  /**
   * Type of detection to perform
   */
  task_type: "bbox_detection" | "point_detection" | "gaze_detection";
  /**
   * Text description of what to detect
   */
  detection_prompt: string;
  /**
   * Whether to use ensemble for gaze detection
   */
  use_ensemble?: boolean;
};
export type MoondreamNextDetectionOutput = {
  /**
   * Output image with detection visualization
   */
  image: Image;
  /**
   * Detection results as text
   */
  text_output: string;
};
export type MoondreamNextInput = {
  /**
   * Image URL to be processed
   */
  image_url: string | Blob | File;
  /**
   * Type of task to perform Default value: `"caption"`
   */
  task_type?: "caption" | "query";
  /**
   * Prompt for query task
   */
  prompt: string;
  /**
   * Maximum number of tokens to generate Default value: `64`
   */
  max_tokens?: number;
};
export type MoondreamNextOutput = {
  /**
   * Response from the model
   */
  output: string;
};
export type MoonDreamOutput = {
  /**
   * Response from the model
   */
  output: string;
};
export type MusePoseInput = {
  /**
   * URL of the image to animate.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the video to drive the animation
   */
  video_url: string | Blob | File;
  /**
   * The resolution to use for the pose detection. Default value: `512`
   */
  dwpose_detection_resolution?: number;
  /**
   * The resolution to use for the image during pose calculation. Default value: `720`
   */
  dwpose_image_resolution?: number;
  /**
   * The frame to align the pose to.
   */
  dwpose_align_frame?: number;
  /**
   * The width of the output video. Default value: `748`
   */
  width?: number;
  /**
   * The height of the output video. Default value: `748`
   */
  height?: number;
  /**
   * The length of the output video. Default value: `300`
   */
  length?: number;
  /**
   * The video slice frame number Default value: `48`
   */
  slice?: number;
  /**
   * The video slice overlap frame number Default value: `4`
   */
  overlap?: number;
  /**
   * Classifier free guidance Default value: `3.5`
   */
  cfg?: number;
  /**
   * The seed to use for the random number generator.
   */
  seed?: number;
  /**
   * DDIM sampling steps Default value: `20`
   */
  steps?: number;
  /**
   * The frames per second of the output video.
   */
  fps?: number;
  /**
   * Number of input frames to skip. Skipping 1 effectively reduces the fps in half. Default value: `1`
   */
  skip?: number;
};
export type MusePoseOutput = {
  /**
   * The generated video with the lip sync.
   */
  video: File;
};
export type MusetalkInput = {
  /**
   * URL of the source video
   */
  source_video_url: string | Blob | File;
  /**
   * URL of the audio
   */
  audio_url: string | Blob | File;
};
export type MusetalkOutput = {
  /**
   * The generated video file.
   */
  video: File;
};
export type NSFWImageDetectionInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
};
export type NSFWImageDetectionOutput = {
  /**
   * The probability of the image being NSFW.
   */
  nsfw_probability: number;
};
export type OmnigenV1Input = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * URL of images to use while generating the image, Use <img><|image_1|></img> for the first image and so on. Default value: ``
   */
  input_image_urls?: Array<string>;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3`
   */
  guidance_scale?: number;
  /**
   * The Image Guidance scale is a measure of how close you want
   * the model to stick to your input image when looking for a related image to show you. Default value: `1.6`
   */
  img_guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
};
export type OmnigenV1Output = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type OmniZeroInput = {
  /**
   * Prompt to guide the image generation.
   */
  prompt: string;
  /**
   * Negative prompt to guide the image generation. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * Composition image url.
   */
  composition_image_url: string | Blob | File;
  /**
   * Style image url.
   */
  style_image_url: string | Blob | File;
  /**
   * Identity image url.
   */
  identity_image_url: string | Blob | File;
  /**
   * Image strength. Default value: `0.75`
   */
  image_strength?: number;
  /**
   * Composition strength. Default value: `1`
   */
  composition_strength?: number;
  /**
   * Depth strength. Default value: `0.5`
   */
  depth_strength?: number;
  /**
   * Style strength. Default value: `1`
   */
  style_strength?: number;
  /**
   * Face strength. Default value: `1`
   */
  face_strength?: number;
  /**
   * Identity strength. Default value: `1`
   */
  identity_strength?: number;
  /**
   * Guidance scale. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * Seed. Default value: `42`
   */
  seed?: number;
  /**
   * Number of images. Default value: `1`
   */
  number_of_images?: number;
};
export type OmniZeroOutput = {
  /**
   * The generated image.
   */
  image: Image;
};
export type Output = {
  /**
   * URL of the processed video file
   */
  video_url: string | Blob | File;
  /**
   * URL of the video's thumbnail image
   */
  thumbnail_url: string | Blob | File;
};
export type PhotomakerInput = {
  /**
   * The URL of the image archive containing the images you want to use.
   */
  image_archive_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The base pipeline to use for generating the image. Default value: `"photomaker"`
   */
  base_pipeline?: "photomaker" | "photomaker-style";
  /**
   * Optional initial image for img2img
   */
  initial_image_url?: string | Blob | File;
  /**
   * How much noise to add to the latent image. O for no noise, 1 for maximum noise. Default value: `0.5`
   */
  initial_image_strength?: number;
  /**
   *  Default value: `"Photographic"`
   */
  style?:
    | "(No style)"
    | "Cinematic"
    | "Disney Character"
    | "Digital Art"
    | "Photographic"
    | "Fantasy art"
    | "Neonpunk"
    | "Enhance"
    | "Comic book"
    | "Lowpoly"
    | "Line art";
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * Increasing the amount of steps tells Stable Diffusion that it should take more steps
   * to generate your final result which can increase the amount of detail in your image. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   *  Default value: `20`
   */
  style_strength?: number;
  /**
   * Number of images to generate in one request. Note that the higher the batch size,
   * the longer it will take to generate the images. Default value: `1`
   */
  num_images?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
};
export type PhotomakerOutput = {
  /**
   *
   */
  images: Array<Image>;
  /**
   *
   */
  seed: number;
};
export type PiDiInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
  /**
   * Whether to use the safe version of the Pidi detector
   */
  safe?: boolean;
  /**
   * Whether to use the scribble version of the Pidi detector
   */
  scribble?: boolean;
  /**
   * Whether to apply the filter to the image.
   */
  apply_filter?: boolean;
};
export type PiDiOutput = {
  /**
   * Image with Pidi lines detected
   */
  image: Image;
};
export type PixartSigmaInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The style to apply to the image. Default value: `"(No style)"`
   */
  style?:
    | "(No style)"
    | "Cinematic"
    | "Photographic"
    | "Anime"
    | "Manga"
    | "Digital Art"
    | "Pixel art"
    | "Fantasy art"
    | "Neonpunk"
    | "3D Model";
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `35`
   */
  num_inference_steps?: number;
  /**
   * The scheduler to use for the model. Default value: `"DPM-SOLVER"`
   */
  scheduler?: "DPM-SOLVER" | "SA-SOLVER";
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `4.5`
   */
  guidance_scale?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
};
export type PixartSigmaOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   * The timings of the different steps of the generation process.
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type PlayaiTtsDialogInput = {
  /**
   * The dialogue text with turn prefixes to distinguish speakers.
   */
  input: string;
  /**
   * A list of voice definitions for each speaker in the dialogue. Must be between 1 and 2 voices. Default value: `[object Object],[object Object]`
   */
  voices?: Array<LDMVoiceInput>;
  /**
   * S3 URI of the autoregressive (AR) model.
   */
  ar?: string;
  /**
   * S3 URI of the AR LoRA model.
   */
  lora?: string;
  /**
   * S3 URI of the vocoder model.
   */
  vocoder?: string;
};
export type PlayaiTtsDialogOutput = {
  /**
   * The generated audio file.
   */
  audio: AudioFile;
};
export type PlayaiTtsV3Input = {
  /**
   * The text to be converted to speech.
   */
  input: string;
  /**
   * The unique ID of a PlayHT or Cloned Voice, or a name from the available presets.
   */
  voice: string;
};
export type PlayaiTtsV3Output = {
  /**
   * The generated audio file.
   */
  audio: AudioFile;
};
export type PlaygroundV25ImageToImageInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
};
export type PlaygroundV25ImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type PlaygroundV25InpaintingInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
};
export type PlaygroundV25InpaintingOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type PlaygroundV25Input = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3`
   */
  guidance_scale?: number;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
};
export type PlaygroundV25Output = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type PolygonOutput = {
  /**
   * List of polygons
   */
  polygons: Array<Polygon>;
};
export type PoseTransferInput = {
  /**
   * The number of inference steps to perform. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same input given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your input when generating the image. Default value: `2.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"png"`
   */
  output_format?: "jpeg" | "png";
  /**
   * Url for the human image.
   */
  pose_image_url: string | Blob | File;
  /**
   * Url to the garment image.
   */
  person_image_url: string | Blob | File;
};
export type PoseTransferOutput = {
  /**
   * The output image.
   */
  image: Image;
  /**
   * The seed for the inference.
   */
  seed: number;
  /**
   * Whether the image contains NSFW concepts.
   */
  has_nsfw_concepts: boolean;
};
export type ProductShotInput = {
  /**
   * The URL of the product shot to be placed in a lifestyle shot. If both image_url and image_file are provided, image_url will be used. Accepted formats are jpeg, jpg, png, webp. Maximum file size 12MB.
   */
  image_url: string | Blob | File;
  /**
   * Text description of the new scene or background for the provided product shot. Bria currently supports prompts in English only, excluding special characters.
   */
  scene_description?: string;
  /**
   * The URL of the reference image to be used for generating the new scene or background for the product shot. Use "" to leave empty.Either ref_image_url or scene_description has to be provided but not both. If both ref_image_url and ref_image_file are provided, ref_image_url will be used. Accepted formats are jpeg, jpg, png, webp. Default value: `""`
   */
  ref_image_url?: string | Blob | File;
  /**
   * Whether to optimize the scene description Default value: `true`
   */
  optimize_description?: boolean;
  /**
   * The number of lifestyle product shots you would like to generate. You will get num_results x 10 results when placement_type=automatic and according to the number of required placements x num_results if placement_type=manual_placement. Default value: `1`
   */
  num_results?: number;
  /**
   * Whether to use the fast model Default value: `true`
   */
  fast?: boolean;
  /**
   * This parameter allows you to control the positioning of the product in the image. Choosing 'original' will preserve the original position of the product in the image. Choosing 'automatic' will generate results with the 10 recommended positions for the product. Choosing 'manual_placement' will allow you to select predefined positions (using the parameter 'manual_placement_selection'). Selecting 'manual_padding' will allow you to control the position and size of the image by defining the desired padding in pixels around the product. Default value: `"manual_placement"`
   */
  placement_type?:
    | "original"
    | "automatic"
    | "manual_placement"
    | "manual_padding";
  /**
   * This flag is only relevant when placement_type=original. If true, the output image retains the original input image's size; otherwise, the image is scaled to 1 megapixel (1MP) while preserving its aspect ratio.
   */
  original_quality?: boolean;
  /**
   * The desired size of the final product shot. For optimal results, the total number of pixels should be around 1,000,000. This parameter is only relevant when placement_type=automatic or placement_type=manual_placement. Default value: `1000,1000`
   */
  shot_size?: Array<number>;
  /**
   * If you've selected placement_type=manual_placement, you should use this parameter to specify which placements/positions you would like to use from the list. You can select more than one placement in one request. Default value: `"bottom_center"`
   */
  manual_placement_selection?:
    | "upper_left"
    | "upper_right"
    | "bottom_left"
    | "bottom_right"
    | "right_center"
    | "left_center"
    | "upper_center"
    | "bottom_center"
    | "center_vertical"
    | "center_horizontal";
  /**
   * The desired padding in pixels around the product, when using placement_type=manual_padding. The order of the values is [left, right, top, bottom]. For optimal results, the total number of pixels, including padding, should be around 1,000,000. It is recommended to first use the product cutout API, get the cutout and understand the size of the result, and then define the required padding and use the cutout as an input for this API.
   */
  padding_values?: Array<number>;
};
export type ProductShotOutput = {
  /**
   * The generated images
   */
  images: Array<Image>;
};
export type PulidInput = {
  /**
   * List of reference faces, ideally 4 images.
   */
  reference_images: Array<ReferenceFace>;
  /**
   * Prompt to generate the face from
   */
  prompt: string;
  /**
   * Negative prompt to generate the face from Default value: `"flaws in the eyes, flaws in the face, flaws, lowres, non-HDRi, low quality, worst quality,artifacts noise, text, watermark, glitch, deformed, mutated, ugly, disfigured, hands, low resolution, partially rendered objects,  deformed or partially rendered eyes, deformed, deformed eyeballs, cross-eyed,blurry"`
   */
  negative_prompt?: string;
  /**
   * Number of images to generate Default value: `1`
   */
  num_images?: number;
  /**
   * Guidance scale Default value: `1.2`
   */
  guidance_scale?: number;
  /**
   * Number of steps to take Default value: `4`
   */
  num_inference_steps?: number;
  /**
   * Random seed for reproducibility
   */
  seed?: number;
  /**
   * Size of the generated image Default value: `[object Object]`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * ID scale Default value: `0.8`
   */
  id_scale?: number;
  /**
   * Mode of generation Default value: `"fidelity"`
   */
  mode?: "fidelity" | "extreme style";
  /**
   * if you want to mix two ID image, please turn this on, otherwise, turn this off
   */
  id_mix?: boolean;
};
export type PulidOutput = {
  /**
   * List of generated images
   */
  images: Array<Image>;
  /**
   * Random seed used for reproducibility
   */
  seed: number;
};
export type QueryInput = {
  /**
   * Image URL to be processed
   */
  image_url: string | Blob | File;
  /**
   * Type of task to perform Default value: `"caption"`
   */
  task_type?: "caption" | "query";
  /**
   * Prompt for query task
   */
  prompt: string;
  /**
   * Maximum number of tokens to generate Default value: `64`
   */
  max_tokens?: number;
};
export type Ray2T2VOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type RealisticVisionImageToImageInput = {
  /**
   * The Realistic Vision model to use.
   */
  model_name?: string;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   *  Default value: `[object Object]`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
};
export type RealisticVisionInpaintingInput = {
  /**
   * The Realistic Vision model to use.
   */
  model_name?: string;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   *  Default value: `[object Object]`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
};
export type RealisticVisionInput = {
  /**
   * The Realistic Vision model to use.
   */
  model_name?: string;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want in the image. Default value: `"(worst quality, low quality, normal quality, lowres, low details, oversaturated, undersaturated, overexposed, underexposed, grayscale, bw, bad photo, bad photography, bad art:1.4), (watermark, signature, text font, username, error, logo, words, letters, digits, autograph, trademark, name:1.2), (blur, blurry, grainy), morbid, ugly, asymmetrical, mutated malformed, mutilated, poorly lit, bad shadow, draft, cropped, out of frame, cut off, censored, jpeg artifacts, out of focus, glitch, duplicate, (airbrushed, cartoon, anime, semi-realistic, cgi, render, blender, digital art, manga, amateur:1.3), (3D ,3D Game, 3D Game Scene, 3D Character:1.1), (bad hands, bad anatomy, bad body, bad face, bad teeth, bad arms, bad legs, deformities:1.3)"`
   */
  negative_prompt?: string;
  /**
   *  Default value: `[object Object]`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `35`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when looking for a related image to show you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
};
export type RealisticVisionOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type Recraft20bInput = {
  /**
   *
   */
  prompt: string;
  /**
   *  Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The style of the generated images. Vector images cost 2X as much. Default value: `"realistic_image"`
   */
  style?:
    | "any"
    | "realistic_image"
    | "digital_illustration"
    | "vector_illustration"
    | "realistic_image/b_and_w"
    | "realistic_image/enterprise"
    | "realistic_image/hard_flash"
    | "realistic_image/hdr"
    | "realistic_image/motion_blur"
    | "realistic_image/natural_light"
    | "realistic_image/studio_portrait"
    | "digital_illustration/2d_art_poster"
    | "digital_illustration/2d_art_poster_2"
    | "digital_illustration/3d"
    | "digital_illustration/80s"
    | "digital_illustration/engraving_color"
    | "digital_illustration/glow"
    | "digital_illustration/grain"
    | "digital_illustration/hand_drawn"
    | "digital_illustration/hand_drawn_outline"
    | "digital_illustration/handmade_3d"
    | "digital_illustration/infantile_sketch"
    | "digital_illustration/kawaii"
    | "digital_illustration/pixel_art"
    | "digital_illustration/psychedelic"
    | "digital_illustration/seamless"
    | "digital_illustration/voxel"
    | "digital_illustration/watercolor"
    | "vector_illustration/cartoon"
    | "vector_illustration/doodle_line_art"
    | "vector_illustration/engraving"
    | "vector_illustration/flat_2"
    | "vector_illustration/kawaii"
    | "vector_illustration/line_art"
    | "vector_illustration/line_circuit"
    | "vector_illustration/linocut"
    | "vector_illustration/seamless"
    | "icon/broken_line"
    | "icon/colored_outline"
    | "icon/colored_shapes"
    | "icon/colored_shapes_gradient"
    | "icon/doodle_fill"
    | "icon/doodle_offset_fill"
    | "icon/offset_fill"
    | "icon/outline"
    | "icon/outline_gradient"
    | "icon/uneven_fill";
  /**
   * An array of preferable colors Default value: ``
   */
  colors?: Array<RGBColor>;
  /**
   * The ID of the custom style reference (optional)
   */
  style_id?: string;
};
export type Recraft20bOutput = {
  /**
   *
   */
  images: Array<File>;
};
export type RecraftClarityUpscaleInput = {
  /**
   * The URL of the image to be upscaled. Must be in PNG format.
   */
  image_url: string | Blob | File;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
};
export type RecraftClarityUpscaleOutput = {
  /**
   * The upscaled image.
   */
  image: Image;
};
export type RecraftCreativeUpscaleInput = {
  /**
   * The URL of the image to be upscaled. Must be in PNG format.
   */
  image_url: string | Blob | File;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
};
export type RecraftCreativeUpscaleOutput = {
  /**
   * The upscaled image.
   */
  image: Image;
};
export type RecraftV3CreateStyleInput = {
  /**
   * URL to zip archive with images, use PNG format. Maximum 5 images are allowed.
   */
  images_data_url: string | Blob | File;
  /**
   * The base style of the generated images, this topic is covered above. Default value: `"digital_illustration"`
   */
  base_style?:
    | "any"
    | "realistic_image"
    | "digital_illustration"
    | "vector_illustration"
    | "realistic_image/b_and_w"
    | "realistic_image/hard_flash"
    | "realistic_image/hdr"
    | "realistic_image/natural_light"
    | "realistic_image/studio_portrait"
    | "realistic_image/enterprise"
    | "realistic_image/motion_blur"
    | "realistic_image/evening_light"
    | "realistic_image/faded_nostalgia"
    | "realistic_image/forest_life"
    | "realistic_image/mystic_naturalism"
    | "realistic_image/natural_tones"
    | "realistic_image/organic_calm"
    | "realistic_image/real_life_glow"
    | "realistic_image/retro_realism"
    | "realistic_image/retro_snapshot"
    | "realistic_image/urban_drama"
    | "realistic_image/village_realism"
    | "realistic_image/warm_folk"
    | "digital_illustration/pixel_art"
    | "digital_illustration/hand_drawn"
    | "digital_illustration/grain"
    | "digital_illustration/infantile_sketch"
    | "digital_illustration/2d_art_poster"
    | "digital_illustration/handmade_3d"
    | "digital_illustration/hand_drawn_outline"
    | "digital_illustration/engraving_color"
    | "digital_illustration/2d_art_poster_2"
    | "digital_illustration/antiquarian"
    | "digital_illustration/bold_fantasy"
    | "digital_illustration/child_book"
    | "digital_illustration/child_books"
    | "digital_illustration/cover"
    | "digital_illustration/crosshatch"
    | "digital_illustration/digital_engraving"
    | "digital_illustration/expressionism"
    | "digital_illustration/freehand_details"
    | "digital_illustration/grain_20"
    | "digital_illustration/graphic_intensity"
    | "digital_illustration/hard_comics"
    | "digital_illustration/long_shadow"
    | "digital_illustration/modern_folk"
    | "digital_illustration/multicolor"
    | "digital_illustration/neon_calm"
    | "digital_illustration/noir"
    | "digital_illustration/nostalgic_pastel"
    | "digital_illustration/outline_details"
    | "digital_illustration/pastel_gradient"
    | "digital_illustration/pastel_sketch"
    | "digital_illustration/pop_art"
    | "digital_illustration/pop_renaissance"
    | "digital_illustration/street_art"
    | "digital_illustration/tablet_sketch"
    | "digital_illustration/urban_glow"
    | "digital_illustration/urban_sketching"
    | "digital_illustration/vanilla_dreams"
    | "digital_illustration/young_adult_book"
    | "digital_illustration/young_adult_book_2"
    | "vector_illustration/bold_stroke"
    | "vector_illustration/chemistry"
    | "vector_illustration/colored_stencil"
    | "vector_illustration/contour_pop_art"
    | "vector_illustration/cosmics"
    | "vector_illustration/cutout"
    | "vector_illustration/depressive"
    | "vector_illustration/editorial"
    | "vector_illustration/emotional_flat"
    | "vector_illustration/infographical"
    | "vector_illustration/marker_outline"
    | "vector_illustration/mosaic"
    | "vector_illustration/naivector"
    | "vector_illustration/roundish_flat"
    | "vector_illustration/segmented_colors"
    | "vector_illustration/sharp_contrast"
    | "vector_illustration/thin"
    | "vector_illustration/vector_photo"
    | "vector_illustration/vivid_shapes"
    | "vector_illustration/engraving"
    | "vector_illustration/line_art"
    | "vector_illustration/line_circuit"
    | "vector_illustration/linocut";
};
export type RecraftV3CreateStyleOutput = {
  /**
   * The ID of the created style, this ID can be used to reference the style in the future.
   */
  style_id: string;
};
export type RecraftV3Input = {
  /**
   *
   */
  prompt: string;
  /**
   *  Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The style of the generated images. Vector images cost 2X as much. Default value: `"realistic_image"`
   */
  style?:
    | "any"
    | "realistic_image"
    | "digital_illustration"
    | "vector_illustration"
    | "realistic_image/b_and_w"
    | "realistic_image/hard_flash"
    | "realistic_image/hdr"
    | "realistic_image/natural_light"
    | "realistic_image/studio_portrait"
    | "realistic_image/enterprise"
    | "realistic_image/motion_blur"
    | "realistic_image/evening_light"
    | "realistic_image/faded_nostalgia"
    | "realistic_image/forest_life"
    | "realistic_image/mystic_naturalism"
    | "realistic_image/natural_tones"
    | "realistic_image/organic_calm"
    | "realistic_image/real_life_glow"
    | "realistic_image/retro_realism"
    | "realistic_image/retro_snapshot"
    | "realistic_image/urban_drama"
    | "realistic_image/village_realism"
    | "realistic_image/warm_folk"
    | "digital_illustration/pixel_art"
    | "digital_illustration/hand_drawn"
    | "digital_illustration/grain"
    | "digital_illustration/infantile_sketch"
    | "digital_illustration/2d_art_poster"
    | "digital_illustration/handmade_3d"
    | "digital_illustration/hand_drawn_outline"
    | "digital_illustration/engraving_color"
    | "digital_illustration/2d_art_poster_2"
    | "digital_illustration/antiquarian"
    | "digital_illustration/bold_fantasy"
    | "digital_illustration/child_book"
    | "digital_illustration/child_books"
    | "digital_illustration/cover"
    | "digital_illustration/crosshatch"
    | "digital_illustration/digital_engraving"
    | "digital_illustration/expressionism"
    | "digital_illustration/freehand_details"
    | "digital_illustration/grain_20"
    | "digital_illustration/graphic_intensity"
    | "digital_illustration/hard_comics"
    | "digital_illustration/long_shadow"
    | "digital_illustration/modern_folk"
    | "digital_illustration/multicolor"
    | "digital_illustration/neon_calm"
    | "digital_illustration/noir"
    | "digital_illustration/nostalgic_pastel"
    | "digital_illustration/outline_details"
    | "digital_illustration/pastel_gradient"
    | "digital_illustration/pastel_sketch"
    | "digital_illustration/pop_art"
    | "digital_illustration/pop_renaissance"
    | "digital_illustration/street_art"
    | "digital_illustration/tablet_sketch"
    | "digital_illustration/urban_glow"
    | "digital_illustration/urban_sketching"
    | "digital_illustration/vanilla_dreams"
    | "digital_illustration/young_adult_book"
    | "digital_illustration/young_adult_book_2"
    | "vector_illustration/bold_stroke"
    | "vector_illustration/chemistry"
    | "vector_illustration/colored_stencil"
    | "vector_illustration/contour_pop_art"
    | "vector_illustration/cosmics"
    | "vector_illustration/cutout"
    | "vector_illustration/depressive"
    | "vector_illustration/editorial"
    | "vector_illustration/emotional_flat"
    | "vector_illustration/infographical"
    | "vector_illustration/marker_outline"
    | "vector_illustration/mosaic"
    | "vector_illustration/naivector"
    | "vector_illustration/roundish_flat"
    | "vector_illustration/segmented_colors"
    | "vector_illustration/sharp_contrast"
    | "vector_illustration/thin"
    | "vector_illustration/vector_photo"
    | "vector_illustration/vivid_shapes"
    | "vector_illustration/engraving"
    | "vector_illustration/line_art"
    | "vector_illustration/line_circuit"
    | "vector_illustration/linocut";
  /**
   * An array of preferable colors Default value: ``
   */
  colors?: Array<RGBColor>;
  /**
   * The ID of the custom style reference (optional)
   */
  style_id?: string;
};
export type RecraftV3Output = {
  /**
   *
   */
  images: Array<File>;
};
export type RegexReplaceInput = {
  /**
   * Input text
   */
  text: string;
  /**
   * Pattern to replace
   */
  pattern: string;
  /**
   * Replacement text
   */
  replace: string;
};
export type RemeshingInput = {
  /**
   * Path for the object file to be remeshed.
   */
  object_url: string | Blob | File;
  /**
   * Output format for the 3D model. Default value: `"glb"`
   */
  output_format?: "glb" | "fbx" | "obj" | "stl" | "usdc";
  /**
   * Number of faces for remesh Default value: `5000`
   */
  faces?: number;
  /**
   * Merge duplicate vertices before exporting Default value: `true`
   */
  merge?: boolean;
  /**
   * Preserve UVs during remeshing Default value: `true`
   */
  preserve_uvs?: boolean;
};
export type RemixImageInput = {
  /**
   * The prompt to remix the image with
   */
  prompt: string;
  /**
   * The image URL to remix
   */
  image_url: string | Blob | File;
  /**
   * The aspect ratio of the generated image Default value: `"1:1"`
   */
  aspect_ratio?:
    | "10:16"
    | "16:10"
    | "9:16"
    | "16:9"
    | "4:3"
    | "3:4"
    | "1:1"
    | "1:3"
    | "3:1"
    | "3:2"
    | "2:3";
  /**
   * Strength of the input image in the remix Default value: `0.8`
   */
  strength?: number;
  /**
   * Whether to expand the prompt with MagicPrompt functionality. Default value: `true`
   */
  expand_prompt?: boolean;
  /**
   * Seed for the random number generator
   */
  seed?: number;
  /**
   * The style of the generated image Default value: `"auto"`
   */
  style?: "auto" | "general" | "realistic" | "design" | "render_3D" | "anime";
};
export type RemoveBackgroundInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * If set to true, the resulting image be cropped to a bounding box around the subject
   */
  crop_to_bbox?: boolean;
};
export type RemoveBackgroundOutput = {
  /**
   * Background removed image.
   */
  image: Image;
};
export type ResizeImageInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * Width of the resized image
   */
  width: number;
  /**
   * Height of the resized image
   */
  height: number;
  /**
   * Resizing mode
   */
  mode: "crop" | "pad" | "scale";
  /**
   * Resizing strategy. Only used when mode is 'scale', default is nearest Default value: `"nearest"`
   */
  resampling?: "nearest" | "bilinear" | "bicubic" | "lanczos";
  /**
   * Proportions of the image. Only used when mode is 'scale', default is fit Default value: `"fit"`
   */
  scaling_proportions?: "fit" | "fill" | "stretch";
  /**
   * Position of cropping. Only used when mode is 'crop', default is center Default value: `"center"`
   */
  cropping_position?:
    | "center"
    | "top_left"
    | "top_right"
    | "bottom_left"
    | "bottom_right";
  /**
   * Color of padding. Only used when mode is 'pad', default is black Default value: `"black"`
   */
  padding_color?: "black" | "white" | "red" | "green" | "blue";
};
export type ResizeToPixelsInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * Maximum number of pixels in the output image. Default value: `1000000`
   */
  max_pixels?: number;
  /**
   * If set, the output dimensions will be divisible by this value.
   */
  enforce_divisibility?: number;
};
export type RetoucherInput = {
  /**
   * The URL of the image to be retouched.
   */
  image_url: string | Blob | File;
  /**
   * Seed for reproducibility. Different seeds will make slightly different results.
   */
  seed?: number;
};
export type RetoucherOutput = {
  /**
   * The generated image file info.
   */
  image: Image;
  /**
   * The seed used for the generation.
   */
  seed: number;
};
export type RFInversionInput = {
  /**
   * The prompt to edit the image with
   */
  prompt: string;
  /**
   * The size of the generated image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The LoRAs to use for the image generation which use a control image. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  control_loras?: Array<ControlLoraWeight>;
  /**
   * The controlnets to use for the image generation. Only one controlnet is supported at the moment. Default value: ``
   */
  controlnets?: Array<ControlNet>;
  /**
   * The controlnet unions to use for the image generation. Only one controlnet is supported at the moment. Default value: ``
   */
  controlnet_unions?: Array<ControlNetUnion>;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * URL of Image for Reference-Only
   */
  reference_image_url?: string | Blob | File;
  /**
   * Strength of reference_only generation. Only used if a reference image is provided. Default value: `0.65`
   */
  reference_strength?: number;
  /**
   * The percentage of the total timesteps when the reference guidance is to bestarted.
   */
  reference_start?: number;
  /**
   * The percentage of the total timesteps when the reference guidance is to be ended. Default value: `1`
   */
  reference_end?: number;
  /**
   * Base shift for the scheduled timesteps Default value: `0.5`
   */
  base_shift?: number;
  /**
   * Max shift for the scheduled timesteps Default value: `1.15`
   */
  max_shift?: number;
  /**
   * URL of image to be edited
   */
  image_url: string | Blob | File;
  /**
   * The controller guidance (gamma) used in the creation of structured noise. Default value: `0.6`
   */
  controller_guidance_forward?: number;
  /**
   * The controller guidance (eta) used in the denoising process.Using values closer to 1 will result in an image closer to input. Default value: `0.75`
   */
  controller_guidance_reverse?: number;
  /**
   * Timestep to start guidance during reverse process.
   */
  reverse_guidance_start?: number;
  /**
   * Timestep to stop guidance during reverse process. Default value: `8`
   */
  reverse_guidance_end?: number;
  /**
   * Scheduler for applying reverse guidance. Default value: `"constant"`
   */
  reverse_guidance_schedule?:
    | "constant"
    | "linear_increase"
    | "linear_decrease";
};
export type RGBAToRGBImageInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * Color to replace the transparent pixels with
   */
  transparent_color: Color;
};
export type Sa2va4bImageInput = {
  /**
   * Prompt to be used for the chat completion
   */
  prompt: string;
  /**
   * Url for the Input image.
   */
  image_url: string | Blob | File;
};
export type Sa2va4bImageOutput = {
  /**
   * Generated output
   */
  output: string;
  /**
   * Dictionary of label: mask image
   */
  masks: Array<Image>;
};
export type Sa2va4bVideoInput = {
  /**
   * Prompt to be used for the chat completion
   */
  prompt: string;
  /**
   * The URL of the input video.
   */
  video_url: string | Blob | File;
  /**
   * Number of frames to sample from the video. If not provided, all frames are sampled.
   */
  num_frames_to_sample?: number;
};
export type Sa2va4bVideoOutput = {
  /**
   * Generated output
   */
  output: string;
  /**
   * Dictionary of label: mask image
   */
  masks: Array<Image>;
};
export type Sa2va8bImageInput = {
  /**
   * Prompt to be used for the chat completion
   */
  prompt: string;
  /**
   * Url for the Input image.
   */
  image_url: string | Blob | File;
};
export type Sa2va8bImageOutput = {
  /**
   * Generated output
   */
  output: string;
  /**
   * Dictionary of label: mask image
   */
  masks: Array<Image>;
};
export type Sa2va8bVideoInput = {
  /**
   * Prompt to be used for the chat completion
   */
  prompt: string;
  /**
   * The URL of the input video.
   */
  video_url: string | Blob | File;
  /**
   * Number of frames to sample from the video. If not provided, all frames are sampled.
   */
  num_frames_to_sample?: number;
};
export type Sa2va8bVideoOutput = {
  /**
   * Generated output
   */
  output: string;
  /**
   * Dictionary of label: mask image
   */
  masks: Array<Image>;
};
export type SadtalkerInput = {
  /**
   * URL of the source image
   */
  source_image_url: string | Blob | File;
  /**
   * URL of the driven audio
   */
  driven_audio_url: string | Blob | File;
  /**
   * The style of the pose
   */
  pose_style?: number;
  /**
   * The resolution of the face model Default value: `"256"`
   */
  face_model_resolution?: "256" | "512";
  /**
   * The scale of the expression Default value: `1`
   */
  expression_scale?: number;
  /**
   * The type of face enhancer to use
   */
  face_enhancer?: "gfpgan";
  /**
   * Whether to use still mode. Fewer head motion, works with preprocess `full`.
   */
  still_mode?: boolean;
  /**
   * The type of preprocessing to use Default value: `"crop"`
   */
  preprocess?: "crop" | "extcrop" | "resize" | "full" | "extfull";
};
export type SadTalkerInput = {
  /**
   * URL of the source image
   */
  source_image_url: string | Blob | File;
  /**
   * URL of the driven audio
   */
  driven_audio_url: string | Blob | File;
  /**
   * The style of the pose
   */
  pose_style?: number;
  /**
   * The resolution of the face model Default value: `"256"`
   */
  face_model_resolution?: "256" | "512";
  /**
   * The scale of the expression Default value: `1`
   */
  expression_scale?: number;
  /**
   * The type of face enhancer to use
   */
  face_enhancer?: "gfpgan";
  /**
   * Whether to use still mode. Fewer head motion, works with preprocess `full`.
   */
  still_mode?: boolean;
  /**
   * The type of preprocessing to use Default value: `"crop"`
   */
  preprocess?: "crop" | "extcrop" | "resize" | "full" | "extfull";
};
export type SadtalkerOutput = {
  /**
   * URL of the generated video
   */
  video: File;
};
export type SadtalkerReferenceInput = {
  /**
   * URL of the source image
   */
  source_image_url: string | Blob | File;
  /**
   * URL of the driven audio
   */
  driven_audio_url: string | Blob | File;
  /**
   * URL of the reference video
   */
  reference_pose_video_url: string | Blob | File;
  /**
   * The style of the pose
   */
  pose_style?: number;
  /**
   * The resolution of the face model Default value: `"256"`
   */
  face_model_resolution?: "256" | "512";
  /**
   * The scale of the expression Default value: `1`
   */
  expression_scale?: number;
  /**
   * The type of face enhancer to use
   */
  face_enhancer?: "gfpgan";
  /**
   * Whether to use still mode. Fewer head motion, works with preprocess `full`.
   */
  still_mode?: boolean;
  /**
   * The type of preprocessing to use Default value: `"crop"`
   */
  preprocess?: "crop" | "extcrop" | "resize" | "full" | "extfull";
};
export type SadtalkerReferenceOutput = {
  /**
   * URL of the generated video
   */
  video: File;
};
export type SadTalkerRefVideoInput = {
  /**
   * URL of the source image
   */
  source_image_url: string | Blob | File;
  /**
   * URL of the driven audio
   */
  driven_audio_url: string | Blob | File;
  /**
   * URL of the reference video
   */
  reference_pose_video_url: string | Blob | File;
  /**
   * The style of the pose
   */
  pose_style?: number;
  /**
   * The resolution of the face model Default value: `"256"`
   */
  face_model_resolution?: "256" | "512";
  /**
   * The scale of the expression Default value: `1`
   */
  expression_scale?: number;
  /**
   * The type of face enhancer to use
   */
  face_enhancer?: "gfpgan";
  /**
   * Whether to use still mode. Fewer head motion, works with preprocess `full`.
   */
  still_mode?: boolean;
  /**
   * The type of preprocessing to use Default value: `"crop"`
   */
  preprocess?: "crop" | "extcrop" | "resize" | "full" | "extfull";
};
export type Sam2ImageInput = {
  /**
   * URL of the image to be segmented
   */
  image_url: string | Blob | File;
  /**
   * List of prompts to segment the image Default value: ``
   */
  prompts?: Array<PointPrompt>;
  /**
   * Coordinates for boxes Default value: ``
   */
  box_prompts?: Array<BoxPrompt>;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The format of the generated image. Default value: `"png"`
   */
  output_format?: "jpeg" | "png";
};
export type SAM2ImageInput = {
  /**
   * URL of the image to be segmented
   */
  image_url: string | Blob | File;
  /**
   * List of prompts to segment the image Default value: ``
   */
  prompts?: Array<PointPrompt>;
  /**
   * Coordinates for boxes Default value: ``
   */
  box_prompts?: Array<BoxPrompt>;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The format of the generated image. Default value: `"png"`
   */
  output_format?: "jpeg" | "png";
};
export type Sam2ImageOutput = {
  /**
   * Segmented image.
   */
  image: Image;
};
export type SAM2ImageOutput = {
  /**
   * Segmented image.
   */
  image: Image;
};
export type SAM2RLEOutput = {
  /**
   * Run Length Encoding of the mask.
   */
  rle: string | Array<string>;
};
export type Sam2VideoInput = {
  /**
   * The URL of the video to be segmented.
   */
  video_url: string | Blob | File;
  /**
   * List of prompts to segment the video Default value: ``
   */
  prompts?: Array<PointPrompt>;
  /**
   * Coordinates for boxes Default value: ``
   */
  box_prompts?: Array<BoxPrompt>;
  /**
   * Apply the mask on the video.
   */
  apply_mask?: boolean;
};
export type SAM2VideoInput = {
  /**
   * The URL of the video to be segmented.
   */
  video_url: string | Blob | File;
  /**
   * List of prompts to segment the video Default value: ``
   */
  prompts?: Array<PointPrompt>;
  /**
   * Coordinates for boxes Default value: ``
   */
  box_prompts?: Array<BoxPrompt>;
  /**
   * Apply the mask on the video.
   */
  apply_mask?: boolean;
};
export type Sam2VideoOutput = {
  /**
   * The segmented video.
   */
  video: File;
};
export type SAM2VideoOutput = {
  /**
   * The segmented video.
   */
  video: File;
};
export type SAM2VideoRLEInput = {
  /**
   * The URL of the video to be segmented.
   */
  video_url: string | Blob | File;
  /**
   * List of prompts to segment the video Default value: ``
   */
  prompts?: Array<PointPrompt>;
  /**
   * Coordinates for boxes Default value: ``
   */
  box_prompts?: Array<BoxPrompt>;
  /**
   * Apply the mask on the video.
   */
  apply_mask?: boolean;
  /**
   * Return the Run Length Encoding of the mask.
   */
  return_rle?: boolean;
};
export type SamInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
};
export type SamOutput = {
  /**
   * Image with SAM segmentation map
   */
  image: Image;
};
export type SanaInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `[object Object]`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `18`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"png"`
   */
  output_format?: "jpeg" | "png";
  /**
   * The style to generate the image in. Default value: `"(No style)"`
   */
  style_name?:
    | "(No style)"
    | "Cinematic"
    | "Photographic"
    | "Anime"
    | "Manga"
    | "Digital Art"
    | "Pixel art"
    | "Fantasy art"
    | "Neonpunk"
    | "3D Model";
};
export type SanaOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type SchnellReduxInput = {
  /**
   * The URL of the image to generate an image from.
   */
  image_url: string | Blob | File;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `4`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type SchnellTextToImageInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `4`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type ScribbleInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
  /**
   * The model to use for the Scribble detector Default value: `"HED"`
   */
  model?: "HED" | "PiDi";
  /**
   * Whether to use the safe version of the Scribble detector
   */
  safe?: boolean;
};
export type ScribbleOutput = {
  /**
   * Image with lines detected using the Scribble detector
   */
  image: Image;
};
export type Sd15DepthControlnetInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The URL of the control image.
   */
  control_image_url: string | Blob | File;
  /**
   * The scale of the controlnet conditioning. Default value: `0.5`
   */
  controlnet_conditioning_scale?: number;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the control image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `35`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, DeepCache will be enabled. TBD
   */
  enable_deep_cache?: boolean;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
};
export type Sd15DepthControlnetOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type SdxlControlnetUnionImageToImageInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The scale of the controlnet conditioning. Default value: `0.5`
   */
  controlnet_conditioning_scale?: number;
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the control image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `35`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
  /**
   * The URL of the control image.
   */
  openpose_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the openpose image. Default value: `true`
   */
  openpose_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  depth_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the depth image. Default value: `true`
   */
  depth_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  teed_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the teed image. Default value: `true`
   */
  teed_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  canny_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the canny image. Default value: `true`
   */
  canny_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  normal_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the normal image. Default value: `true`
   */
  normal_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  segmentation_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the segmentation image. Default value: `true`
   */
  segmentation_preprocess?: boolean;
};
export type SdxlControlnetUnionImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type SdxlControlnetUnionInpaintingInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The scale of the controlnet conditioning. Default value: `0.5`
   */
  controlnet_conditioning_scale?: number;
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The URL of the mask to use for inpainting.
   */
  mask_url: string | Blob | File;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the control image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `35`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * determines how much the generated image resembles the initial image Default value: `0.95`
   */
  strength?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
  /**
   * The URL of the control image.
   */
  openpose_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the openpose image. Default value: `true`
   */
  openpose_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  depth_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the depth image. Default value: `true`
   */
  depth_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  teed_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the teed image. Default value: `true`
   */
  teed_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  canny_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the canny image. Default value: `true`
   */
  canny_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  normal_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the normal image. Default value: `true`
   */
  normal_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  segmentation_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the segmentation image. Default value: `true`
   */
  segmentation_preprocess?: boolean;
};
export type SdxlControlnetUnionInpaintingOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type SdxlControlnetUnionInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The scale of the controlnet conditioning. Default value: `0.5`
   */
  controlnet_conditioning_scale?: number;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the control image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `35`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
  /**
   * The URL of the control image.
   */
  openpose_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the openpose image. Default value: `true`
   */
  openpose_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  depth_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the depth image. Default value: `true`
   */
  depth_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  teed_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the teed image. Default value: `true`
   */
  teed_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  canny_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the canny image. Default value: `true`
   */
  canny_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  normal_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the normal image. Default value: `true`
   */
  normal_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  segmentation_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the segmentation image. Default value: `true`
   */
  segmentation_preprocess?: boolean;
};
export type SdxlControlnetUnionOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type ShrinkMaskInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * The number of pixels to shrink the mask. Default value: `5`
   */
  pixels?: number;
  /**
   * The threshold to convert the image to a mask. 0-255. Default value: `128`
   */
  threshold?: number;
};
export type ShrinkMaskOutput = {
  /**
   * The mask
   */
  image: Image;
};
export type SigmasInput = {
  /**
   * The method to use for the sigmas. If set to 'custom', the sigmas will be set based
   * on the provided sigmas schedule in the `array` field.
   * Defaults to 'default' which means the scheduler will use the sigmas of the scheduler. Default value: `"default"`
   */
  method?: "default" | "array";
  /**
   * Sigmas schedule to be used if 'custom' method is selected. Default value: ``
   */
  array?: Array<number>;
};
export type SoteDiffusionInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * Number of steps to run the first stage for. Default value: `25`
   */
  first_stage_steps?: number;
  /**
   * Number of steps to run the second stage for. Default value: `10`
   */
  second_stage_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `8`
   */
  guidance_scale?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `2`
   */
  second_stage_guidance_scale?: number;
  /**
   * The size of the generated image. Default value: `[object Object]`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The same seed and the same prompt given to the same version of Stable Cascade
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to false, the safety checker will be disabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the image will be returned as base64 encoded string.
   */
  sync_mode?: boolean;
};
export type StableAudioInput = {
  /**
   * The prompt to generate audio from
   */
  prompt: string;
  /**
   * The start point of the audio clip to generate
   */
  seconds_start?: number;
  /**
   * The duration of the audio clip to generate Default value: `30`
   */
  seconds_total?: number;
  /**
   * The number of steps to denoise the audio for Default value: `100`
   */
  steps?: number;
};
export type StableAudioOutput = {
  /**
   * The generated audio clip
   */
  audio_file: File;
};
export type StableCascadeInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * Number of steps to run the first stage for. Default value: `20`
   */
  first_stage_steps?: number;
  /**
   * Number of steps to run the second stage for. Default value: `10`
   */
  second_stage_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `4`
   */
  guidance_scale?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you.
   */
  second_stage_guidance_scale?: number;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The same seed and the same prompt given to the same version of Stable Cascade
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to false, the safety checker will be disabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the image will be returned as base64 encoded string.
   */
  sync_mode?: boolean;
};
export type StableCascadeOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type StableCascadeSoteDiffusionInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * Number of steps to run the first stage for. Default value: `25`
   */
  first_stage_steps?: number;
  /**
   * Number of steps to run the second stage for. Default value: `10`
   */
  second_stage_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `8`
   */
  guidance_scale?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `2`
   */
  second_stage_guidance_scale?: number;
  /**
   * The size of the generated image. Default value: `[object Object]`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The same seed and the same prompt given to the same version of Stable Cascade
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to false, the safety checker will be disabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the image will be returned as base64 encoded string.
   */
  sync_mode?: boolean;
};
export type StableCascadeSoteDiffusionOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type StableDiffusionV15Input = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type StableDiffusionV15Output = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type StableDiffusionV35LargeInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
  /**
   * ControlNet for inference.
   */
  controlnet?: ControlNet;
  /**
   * The size of the generated image. Defaults to landscape_4_3 if no controlnet has been passed, otherwise defaults to the size of the controlnet conditioning image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * IP-Adapter to use during inference.
   */
  ip_adapter?: IPAdapter;
};
export type StableDiffusionV35LargeOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type StableDiffusionV35MediumInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `landscape_4_3`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `40`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `4.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
};
export type StableDiffusionV35MediumOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type StableDiffusionV3MediumImageToImageInput = {
  /**
   * The image URL to generate an image from.
   */
  image_url: string | Blob | File;
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The negative prompt to generate an image from. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * If set to true, prompt will be upsampled with more details.
   */
  prompt_expansion?: boolean;
  /**
   * The size of the generated image. Defaults to the conditioning image's size.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The strength of the image-to-image transformation. Default value: `0.9`
   */
  strength?: number;
};
export type StableDiffusionV3MediumImageToImageOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
  /**
   * The number of images generated.
   */
  num_images: number;
};
export type StableDiffusionV3MediumInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The negative prompt to generate an image from. Default value: `""`
   */
  negative_prompt?: string;
  /**
   * If set to true, prompt will be upsampled with more details.
   */
  prompt_expansion?: boolean;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `28`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
};
export type StableDiffusionV3MediumOutput = {
  /**
   * The generated image files info.
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
  /**
   * The number of images generated.
   */
  num_images: number;
};
export type StableVideoInput = {
  /**
   * The URL of the image to use as a starting point for the generation.
   */
  image_url: string | Blob | File;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The motion bucket id determines the motion of the generated video. The
   * higher the number, the more motion there will be. Default value: `127`
   */
  motion_bucket_id?: number;
  /**
   * The conditoning augmentation determines the amount of noise that will be
   * added to the conditioning frame. The higher the number, the more noise
   * there will be, and the less the video will look like the initial image.
   * Increase it for more motion. Default value: `0.02`
   */
  cond_aug?: number;
  /**
   * The frames per second of the generated video. Default value: `25`
   */
  fps?: number;
};
export type StableVideoOutput = {
  /**
   * Generated video
   */
  video: File;
  /**
   * Seed for random number generator
   */
  seed: number;
};
export type StyleReferenceInput = {
  /**
   * URL to zip archive with images, use PNG format. Maximum 5 images are allowed.
   */
  images_data_url: string | Blob | File;
  /**
   * The base style of the generated images, this topic is covered above. Default value: `"digital_illustration"`
   */
  base_style?:
    | "any"
    | "realistic_image"
    | "digital_illustration"
    | "vector_illustration"
    | "realistic_image/b_and_w"
    | "realistic_image/hard_flash"
    | "realistic_image/hdr"
    | "realistic_image/natural_light"
    | "realistic_image/studio_portrait"
    | "realistic_image/enterprise"
    | "realistic_image/motion_blur"
    | "realistic_image/evening_light"
    | "realistic_image/faded_nostalgia"
    | "realistic_image/forest_life"
    | "realistic_image/mystic_naturalism"
    | "realistic_image/natural_tones"
    | "realistic_image/organic_calm"
    | "realistic_image/real_life_glow"
    | "realistic_image/retro_realism"
    | "realistic_image/retro_snapshot"
    | "realistic_image/urban_drama"
    | "realistic_image/village_realism"
    | "realistic_image/warm_folk"
    | "digital_illustration/pixel_art"
    | "digital_illustration/hand_drawn"
    | "digital_illustration/grain"
    | "digital_illustration/infantile_sketch"
    | "digital_illustration/2d_art_poster"
    | "digital_illustration/handmade_3d"
    | "digital_illustration/hand_drawn_outline"
    | "digital_illustration/engraving_color"
    | "digital_illustration/2d_art_poster_2"
    | "digital_illustration/antiquarian"
    | "digital_illustration/bold_fantasy"
    | "digital_illustration/child_book"
    | "digital_illustration/child_books"
    | "digital_illustration/cover"
    | "digital_illustration/crosshatch"
    | "digital_illustration/digital_engraving"
    | "digital_illustration/expressionism"
    | "digital_illustration/freehand_details"
    | "digital_illustration/grain_20"
    | "digital_illustration/graphic_intensity"
    | "digital_illustration/hard_comics"
    | "digital_illustration/long_shadow"
    | "digital_illustration/modern_folk"
    | "digital_illustration/multicolor"
    | "digital_illustration/neon_calm"
    | "digital_illustration/noir"
    | "digital_illustration/nostalgic_pastel"
    | "digital_illustration/outline_details"
    | "digital_illustration/pastel_gradient"
    | "digital_illustration/pastel_sketch"
    | "digital_illustration/pop_art"
    | "digital_illustration/pop_renaissance"
    | "digital_illustration/street_art"
    | "digital_illustration/tablet_sketch"
    | "digital_illustration/urban_glow"
    | "digital_illustration/urban_sketching"
    | "digital_illustration/vanilla_dreams"
    | "digital_illustration/young_adult_book"
    | "digital_illustration/young_adult_book_2"
    | "vector_illustration/bold_stroke"
    | "vector_illustration/chemistry"
    | "vector_illustration/colored_stencil"
    | "vector_illustration/contour_pop_art"
    | "vector_illustration/cosmics"
    | "vector_illustration/cutout"
    | "vector_illustration/depressive"
    | "vector_illustration/editorial"
    | "vector_illustration/emotional_flat"
    | "vector_illustration/infographical"
    | "vector_illustration/marker_outline"
    | "vector_illustration/mosaic"
    | "vector_illustration/naivector"
    | "vector_illustration/roundish_flat"
    | "vector_illustration/segmented_colors"
    | "vector_illustration/sharp_contrast"
    | "vector_illustration/thin"
    | "vector_illustration/vector_photo"
    | "vector_illustration/vivid_shapes"
    | "vector_illustration/engraving"
    | "vector_illustration/line_art"
    | "vector_illustration/line_circuit"
    | "vector_illustration/linocut";
};
export type StyleReferenceOutput = {
  /**
   * The ID of the created style, this ID can be used to reference the style in the future.
   */
  style_id: string;
};
export type SubjectReferenceOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type Switti512Input = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The number of top-k tokens to sample from. Default value: `400`
   */
  sampling_top_k?: number;
  /**
   * The top-p probability to sample from. Default value: `0.95`
   */
  sampling_top_p?: number;
  /**
   * Smoothing with Gumbel softmax sampling Default value: `true`
   */
  more_smooth?: boolean;
  /**
   * More diverse sampling
   */
  more_diverse?: boolean;
  /**
   * Smoothing starting scale Default value: `2`
   */
  smooth_start_si?: number;
  /**
   * Disable CFG starting scale Default value: `8`
   */
  turn_off_cfg_start_si?: number;
  /**
   * Temperature after disabling CFG Default value: `0.1`
   */
  last_scale_temp?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `6`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
};
export type Switti512Output = {
  /**
   * The generated images
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type SwittiInput = {
  /**
   * The prompt to generate an image from.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The number of top-k tokens to sample from. Default value: `400`
   */
  sampling_top_k?: number;
  /**
   * The top-p probability to sample from. Default value: `0.95`
   */
  sampling_top_p?: number;
  /**
   * Smoothing with Gumbel softmax sampling Default value: `true`
   */
  more_smooth?: boolean;
  /**
   * More diverse sampling
   */
  more_diverse?: boolean;
  /**
   * Smoothing starting scale Default value: `2`
   */
  smooth_start_si?: number;
  /**
   * Disable CFG starting scale Default value: `8`
   */
  turn_off_cfg_start_si?: number;
  /**
   * Temperature after disabling CFG Default value: `0.1`
   */
  last_scale_temp?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `6`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  output_format?: "jpeg" | "png";
};
export type SwittiOutput = {
  /**
   * The generated images
   */
  images: Array<Image>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated Image. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * Whether the generated images contain NSFW concepts.
   */
  has_nsfw_concepts: Array<boolean>;
  /**
   * The prompt used for generating the image.
   */
  prompt: string;
};
export type SyncLipsyncInput = {
  /**
   * The model to use for lipsyncing Default value: `"lipsync-1.9.0-beta"`
   */
  model?: "lipsync-1.8.0" | "lipsync-1.7.1" | "lipsync-1.9.0-beta";
  /**
   * URL of the input video
   */
  video_url: string | Blob | File;
  /**
   * URL of the input audio
   */
  audio_url: string | Blob | File;
  /**
   * Lipsync mode when audio and video durations are out of sync. Default value: `"cut_off"`
   */
  sync_mode?: "cut_off" | "loop" | "bounce";
};
export type SyncLipsyncOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type T2VLiveOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type T2VOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type T2vTurboInput = {
  /**
   * The prompt to generate images from
   */
  prompt: string;
  /**
   * The seed to use for the random number generator
   */
  seed?: number | null;
  /**
   * The number of steps to sample Default value: `4`
   */
  num_inference_steps?: number;
  /**
   * The guidance scale Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * The number of frames to generate Default value: `16`
   */
  num_frames?: number;
  /**
   * The FPS of the exported video Default value: `8`
   */
  export_fps?: number;
};
export type T2vTurboOutput = {
  /**
   * The URL to the generated video
   */
  video: File;
};
export type TeedInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
};
export type TeeDInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
};
export type TeedOutput = {
  /**
   * The edge map.
   */
  image: Image;
};
export type TeeDOutput = {
  /**
   * Image with TeeD lines detected
   */
  image: Image;
};
export type TextInput = {
  /**
   * The prompt to use as a starting point for the generation.
   */
  prompt: string;
  /**
   * The negative prompt to use as a starting point for the generation. Default value: `"unrealistic, saturated, high contrast, big nose, painting, drawing, sketch, cartoon, anime, manga, render, CG, 3d, watermark, signature, label"`
   */
  negative_prompt?: string;
  /**
   * The size of the generated video. Default value: `landscape_16_9`
   */
  video_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The motion bucket id determines the motion of the generated video. The
   * higher the number, the more motion there will be. Default value: `127`
   */
  motion_bucket_id?: number;
  /**
   * The conditoning augmentation determines the amount of noise that will be
   * added to the conditioning frame. The higher the number, the more noise
   * there will be, and the less the video will look like the initial image.
   * Increase it for more motion. Default value: `0.02`
   */
  cond_aug?: number;
};
export type TextOutput = {
  /**
   * The output text
   */
  text: string;
};
export type TextToImageControlNetInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The URL of the control image.
   */
  control_image_url: string | Blob | File;
  /**
   * The scale of the controlnet conditioning. Default value: `0.5`
   */
  controlnet_conditioning_scale?: number;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the control image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, DeepCache will be enabled. TBD
   */
  enable_deep_cache?: boolean;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
};
export type TextToImageControlNetUnionInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The scale of the controlnet conditioning. Default value: `0.5`
   */
  controlnet_conditioning_scale?: number;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Leave it none to automatically infer from the control image.
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `35`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of LoRA weights to use. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
  /**
   * The URL of the control image.
   */
  openpose_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the openpose image. Default value: `true`
   */
  openpose_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  depth_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the depth image. Default value: `true`
   */
  depth_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  teed_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the teed image. Default value: `true`
   */
  teed_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  canny_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the canny image. Default value: `true`
   */
  canny_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  normal_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the normal image. Default value: `true`
   */
  normal_preprocess?: boolean;
  /**
   * The URL of the control image.
   */
  segmentation_image_url?: string | Blob | File;
  /**
   * Whether to preprocess the segmentation image. Default value: `true`
   */
  segmentation_preprocess?: boolean;
};
export type TextToImageFooocusInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `8`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `2`
   */
  guidance_scale?: number;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts. Default value: `true`
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
  /**
   * If set to true, a smaller model will try to refine the output after it was processed. Default value: `true`
   */
  enable_refiner?: boolean;
};
export type TextToImageHyperInput = {
  /**
   *
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `"1"`
   */
  num_inference_steps?: "1" | "2" | "4";
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type TextToImageInput = {
  /**
   * URL or HuggingFace ID of the base model to generate the image.
   */
  model_name: string;
  /**
   * URL or HuggingFace ID of the custom U-Net model to use for the image generation.
   */
  unet_name?: string;
  /**
   * The variant of the model to use for huggingface models, e.g. 'fp16'.
   */
  variant?: string;
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use.Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * If set to true, the prompt weighting syntax will be used.
   * Additionally, this will lift the 77 token limit by averaging embeddings.
   */
  prompt_weighting?: boolean;
  /**
   * The LoRAs to use for the image generation. You can use any number of LoRAs
   * and they will be merged together to generate the final image. Default value: ``
   */
  loras?: Array<LoraWeight>;
  /**
   * The embeddings to use for the image generation. Only a single embedding is supported at the moment.
   * The embeddings will be used to map the tokens in the prompt to the embedding weights. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * The control nets to use for the image generation. You can use any number of control nets
   * and they will be applied to the image at the specified timesteps. Default value: ``
   */
  controlnets?: Array<ControlNet>;
  /**
   * If set to true, the controlnet will be applied to only the conditional predictions.
   */
  controlnet_guess_mode?: boolean;
  /**
   * The IP adapter to use for the image generation. Default value: ``
   */
  ip_adapter?: Array<IPAdapter>;
  /**
   * The path to the image encoder model to use for the image generation.
   */
  image_encoder_path?: string;
  /**
   * The subfolder of the image encoder model to use for the image generation.
   */
  image_encoder_subfolder?: string;
  /**
   * The weight name of the image encoder model to use for the image generation. Default value: `"pytorch_model.bin"`
   */
  image_encoder_weight_name?: string;
  /**
   * The URL of the IC Light model to use for the image generation.
   */
  ic_light_model_url?: string | Blob | File;
  /**
   * The URL of the IC Light model background image to use for the image generation.
   * Make sure to use a background compatible with the model.
   */
  ic_light_model_background_image_url?: string | Blob | File;
  /**
   * The URL of the IC Light model image to use for the image generation.
   */
  ic_light_image_url?: string | Blob | File;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The size of the generated image. You can choose between some presets or custom height and width
   * that **must be multiples of 8**. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * Increasing the amount of steps tells Stable Diffusion that it should take more steps
   * to generate your final result which can increase the amount of detail in your image. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `7.5`
   */
  guidance_scale?: number;
  /**
   * Skips part of the image generation process, leading to slightly different results.
   * This means the image renders faster, too.
   */
  clip_skip?: number;
  /**
   * Scheduler / sampler to use for the image denoising process.
   */
  scheduler?:
    | "DPM++ 2M"
    | "DPM++ 2M Karras"
    | "DPM++ 2M SDE"
    | "DPM++ 2M SDE Karras"
    | "Euler"
    | "Euler A"
    | "Euler (trailing timesteps)"
    | "LCM"
    | "LCM (trailing timesteps)"
    | "DDIM"
    | "TCD";
  /**
   * Optionally override the timesteps to use for the denoising process. Only works with schedulers which support the `timesteps` argument in their `set_timesteps` method.
   * Defaults to not overriding, in which case the scheduler automatically sets the timesteps based on the `num_inference_steps` parameter.
   * If set to a custom timestep schedule, the `num_inference_steps` parameter will be ignored. Cannot be set if `sigmas` is set. Default value: `[object Object]`
   */
  timesteps?: TimestepsInput;
  /**
   * Optionally override the sigmas to use for the denoising process. Only works with schedulers which support the `sigmas` argument in their `set_sigmas` method.
   * Defaults to not overriding, in which case the scheduler automatically sets the sigmas based on the `num_inference_steps` parameter.
   * If set to a custom sigma schedule, the `num_inference_steps` parameter will be ignored. Cannot be set if `timesteps` is set. Default value: `[object Object]`
   */
  sigmas?: SigmasInput;
  /**
   * The type of prediction to use for the image generation.
   * The `epsilon` is the default. Default value: `"epsilon"`
   */
  prediction_type?: "v_prediction" | "epsilon";
  /**
   * Whether to set the rescale_betas_snr_zero option or not for the sampler
   */
  rescale_betas_snr_zero?: boolean;
  /**
   * The format of the generated image. Default value: `"png"`
   */
  image_format?: "jpeg" | "png";
  /**
   * Number of images to generate in one request. Note that the higher the batch size,
   * the longer it will take to generate the images. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * The size of the tiles to be used for the image generation. Default value: `4096`
   */
  tile_width?: number;
  /**
   * The size of the tiles to be used for the image generation. Default value: `4096`
   */
  tile_height?: number;
  /**
   * The stride of the tiles to be used for the image generation. Default value: `2048`
   */
  tile_stride_width?: number;
  /**
   * The stride of the tiles to be used for the image generation. Default value: `2048`
   */
  tile_stride_height?: number;
  /**
   * The eta value to be used for the image generation.
   */
  eta?: number;
  /**
   * If set to true, the latents will be saved for debugging.
   */
  debug_latents?: boolean;
  /**
   * If set to true, the latents will be saved for debugging per pass.
   */
  debug_per_pass_latents?: boolean;
};
export type TextToImageLCMInput = {
  /**
   * The name of the model to use. Default value: `"stabilityai/stable-diffusion-xl-base-1.0"`
   */
  model_name?:
    | "stabilityai/stable-diffusion-xl-base-1.0"
    | "runwayml/stable-diffusion-v1-5";
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `6`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `1.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN. Default value: `true`
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
  /**
   * An id bound to a request, can be used with response to identify the request
   * itself. Default value: `""`
   */
  request_id?: string;
};
export type TextToImageLightningInput = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `"4"`
   */
  num_inference_steps?: "1" | "2" | "4" | "8";
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
};
export type TextToImageOutput = {
  /**
   *
   */
  images: Array<File>;
};
export type TextToImagePlaygroundv25Input = {
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square_hd`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `25`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `3`
   */
  guidance_scale?: number;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * The list of embeddings to use. Default value: ``
   */
  embeddings?: Array<Embedding>;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The version of the safety checker to use. v1 is the default CompVis safety checker. v2 uses a custom ViT model. Default value: `"v1"`
   */
  safety_checker_version?: "v1" | "v2";
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
  /**
   * The format of the generated image. Default value: `"jpeg"`
   */
  format?: "jpeg" | "png";
  /**
   * The rescale factor for the CFG.
   */
  guidance_rescale?: number;
};
export type TextToImageTurboInput = {
  /**
   * The name of the model to use. Default value: `"stabilityai/sdxl-turbo"`
   */
  model_name?: "stabilityai/sdxl-turbo" | "stabilityai/sd-turbo";
  /**
   * The prompt to use for generating the image. Be as descriptive as possible for best results.
   */
  prompt: string;
  /**
   * The negative prompt to use. Use it to address details that you don't want
   * in the image. This could be colors, objects, scenery and even the small details
   * (e.g. moustache, blurry, low resolution). Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The size of the generated image. Default value: `square`
   */
  image_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The number of inference steps to perform. Default value: `2`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of Stable Diffusion
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related image to show you. Default value: `1`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN. Default value: `true`
   */
  sync_mode?: boolean;
  /**
   * The number of images to generate. Default value: `1`
   */
  num_images?: number;
  /**
   * If set to true, the safety checker will be enabled.
   */
  enable_safety_checker?: boolean;
  /**
   * If set to true, the prompt will be expanded with additional prompts.
   */
  expand_prompt?: boolean;
};
export type TextToVideoInput = {
  /**
   * The prompt to generate the video from.
   */
  prompt: string;
  /**
   * The negative prompt to generate the video from. Default value: `"low quality, worst quality, deformed, distorted, disfigured, motion smear, motion artifacts, fused fingers, bad anatomy, weird hand, ugly"`
   */
  negative_prompt?: string;
  /**
   * The seed to use for random number generation.
   */
  seed?: number;
  /**
   * The number of inference steps to take. Default value: `30`
   */
  num_inference_steps?: number;
  /**
   * The guidance scale to use. Default value: `3`
   */
  guidance_scale?: number;
};
export type TimestepsInput = {
  /**
   * The method to use for the timesteps. If set to 'array', the timesteps will be set based
   * on the provided timesteps schedule in the `array` field.
   * Defaults to 'default' which means the scheduler will use the `num_inference_steps` parameter. Default value: `"default"`
   */
  method?: "default" | "array";
  /**
   * Timesteps schedule to be used if 'custom' method is selected. Default value: ``
   */
  array?: Array<number>;
};
export type TrainingInput = {
  /**
   * The name of the training job (required, max 255 characters).
   */
  name: string;
  /**
   * A list of audio URLs used for training (must be between 1 and 5 URLs).
   */
  training_data: Array<AudioInput>;
};
export type TransparentImageToMaskInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * The threshold to convert the image to a mask. Default value: `128`
   */
  threshold?: number;
};
export type TransparentImageToMaskOutput = {
  /**
   * The mask
   */
  image: Image;
};
export type TranspixarInput = {
  /**
   * The prompt to generate the video from.
   */
  prompt: string;
  /**
   * The negative prompt to generate video from Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The number of inference steps to perform. Default value: `24`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same video every time.
   */
  seed?: number | null;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related video to show you. Default value: `7`
   */
  guidance_scale?: number;
  /**
   * The target FPS of the video Default value: `8`
   */
  export_fps?: number;
};
export type TranspixarOutput = {
  /**
   * The URL to the generated video
   */
  videos: Array<File>;
  /**
   *
   */
  timings: any;
  /**
   * Seed of the generated video. It will be the same value of the one passed in the
   * input or the randomly generated that was used in case none was passed.
   */
  seed: number;
  /**
   * The prompt used for generating the video.
   */
  prompt: string;
};
export type TrellisInput = {
  /**
   * URL of the input image to convert to 3D
   */
  image_url: string | Blob | File;
  /**
   * Random seed for reproducibility
   */
  seed?: number;
  /**
   * Guidance strength for sparse structure generation Default value: `7.5`
   */
  ss_guidance_strength?: number;
  /**
   * Sampling steps for sparse structure generation Default value: `12`
   */
  ss_sampling_steps?: number;
  /**
   * Guidance strength for structured latent generation Default value: `3`
   */
  slat_guidance_strength?: number;
  /**
   * Sampling steps for structured latent generation Default value: `12`
   */
  slat_sampling_steps?: number;
  /**
   * Mesh simplification factor Default value: `0.95`
   */
  mesh_simplify?: number;
  /**
   * Texture resolution Default value: `"1024"`
   */
  texture_size?: "512" | "1024" | "1536" | "2048";
};
export type TrellisOutput = {
  /**
   * Generated 3D mesh file
   */
  model_mesh: File;
  /**
   * Processing timings
   */
  timings: any;
};
export type TriposrInput = {
  /**
   * Path for the image file to be processed.
   */
  image_url: string | Blob | File;
  /**
   * Output format for the 3D model. Default value: `"glb"`
   */
  output_format?: "glb" | "obj";
  /**
   * Whether to remove the background from the input image. Default value: `true`
   */
  do_remove_background?: boolean;
  /**
   * Ratio of the foreground image to the original image. Default value: `0.9`
   */
  foreground_ratio?: number;
  /**
   * Resolution of the marching cubes. Above 512 is not recommended. Default value: `256`
   */
  mc_resolution?: number;
};
export type TriposrOutput = {
  /**
   * Generated 3D object file.
   */
  model_mesh: File;
  /**
   * Inference timings.
   */
  timings: any;
  /**
   * Directory containing textures for the remeshed model.
   */
  remeshing_dir?: File;
};
export type TryonInput = {
  /**
   * URL or base64 of the model image
   */
  model_image: string;
  /**
   * URL or base64 of the garment image
   */
  garment_image: string;
  /**
   * Category of the garment to try-on.
   */
  category: "tops" | "bottoms" | "one-pieces";
  /**
   * Specifies the type of garment photo to optimize internal parameters for better performance. 'model' is for photos of garments on a model, 'flat-lay' is for flat-lay or ghost mannequin images, and 'auto' attempts to automatically detect the photo type. Default value: `"auto"`
   */
  garment_photo_type?: "auto" | "model" | "flat-lay";
  /**
   * Runs NSFW content filter on inputs. Default value: `true`
   */
  nsfw_filter?: boolean;
  /**
   * Allows long garments to cover the feet/shoes or change their appearance.
   */
  cover_feet?: boolean;
  /**
   * Allow to change the appearance of the model’s hands. Example use-cases: Remove gloves, get hands out of pockets, long sleeves that should cover hands.
   */
  adjust_hands?: boolean;
  /**
   * Apply additional steps to preserve the original background. Runtime will be slower. Not needed for simple backgrounds.
   */
  restore_background?: boolean;
  /**
   * Apply additional steps to preserve the appearance of clothes that weren’t swapped (e.g. keep pants if trying-on top).
   */
  restore_clothes?: boolean;
  /**
   * Adjusts internal parameters for better performance on long tops such as: Longline shirts, tunics, coats, etc.
   */
  long_top?: boolean;
  /**
   * Higher guidance scales can help with preserving garment detail, but risks oversaturated colors. Default value: `2`
   */
  guidance_scale?: number;
  /**
   * Determines how many steps the diffusion model will take to generate the image. For simple try-ons, steps can be reduced for faster runtime. Default value: `50`
   */
  timesteps?: number;
  /**
   * Sets random operations to a fixed state. Use the same seed to reproduce results with the same inputs, or different seed to force different results. Default value: `42`
   */
  seed?: number;
  /**
   * Number of images to generate in a single run. Image generation has a random element in it, so trying multiple images at once increases the chances of getting a good result. Default value: `1`
   */
  num_samples?: number;
};
export type TryonOutput = {
  /**
   * URLs of the generated images
   */
  images: Array<Image>;
};
export type UpscaleInput = {
  /**
   * Url to input image
   */
  image_url: string | Blob | File;
  /**
   * Rescaling factor Default value: `2`
   */
  scale?: number;
  /**
   * Tile size. Default is 0, that is no tile. When encountering the out-of-GPU-memory issue, please specify it, e.g., 400 or 200
   */
  tile?: number;
  /**
   * Upscaling a face
   */
  face?: boolean;
  /**
   * Model to use for upscaling Default value: `"RealESRGAN_x4plus"`
   */
  model?:
    | "RealESRGAN_x4plus"
    | "RealESRGAN_x2plus"
    | "RealESRGAN_x4plus_anime_6B"
    | "RealESRGAN_x4_v3"
    | "RealESRGAN_x4_wdn_v3"
    | "RealESRGAN_x4_anime_v3";
  /**
   * Output image format (png or jpeg) Default value: `"png"`
   */
  output_format?: "png" | "jpeg";
};
export type UpscaleOutput = {
  /**
   * Upscaled image
   */
  image: Image;
};
export type V3TTSInput = {
  /**
   * The text to be converted to speech.
   */
  input: string;
  /**
   * The unique ID of a PlayHT or Cloned Voice, or a name from the available presets.
   */
  voice: string;
};
export type V3TTSOutput = {
  /**
   * The generated audio file.
   */
  audio: AudioFile;
};
export type VideoInput = {
  /**
   * Prompt to be used for the chat completion
   */
  prompt: string;
  /**
   * The URL of the input video.
   */
  video_url: string | Blob | File;
  /**
   * Number of frames to sample from the video. If not provided, all frames are sampled.
   */
  num_frames_to_sample?: number;
};
export type VideoOutput = {
  /**
   * The generated video
   */
  video: File;
};
export type VideoToVideoInput = {
  /**
   * The prompt to generate the video from.
   */
  prompt: string;
  /**
   * The size of the generated video. Default value: `[object Object]`
   */
  video_size?:
    | ImageSize
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  /**
   * The negative prompt to generate video from Default value: `""`
   */
  negative_prompt?: string;
  /**
   * The number of inference steps to perform. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same prompt given to the same version of the model
   * will output the same video every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your prompt when looking for a related video to show you. Default value: `7`
   */
  guidance_scale?: number;
  /**
   * Use RIFE for video interpolation Default value: `true`
   */
  use_rife?: boolean;
  /**
   * The target FPS of the video Default value: `16`
   */
  export_fps?: number;
  /**
   * The video to generate the video from.
   */
  video_url: string | Blob | File;
  /**
   * The strength to use for Video to Video.  1.0 completely remakes the video while 0.0 preserves the original. Default value: `0.8`
   */
  strength?: number;
};
export type VideoUpscalerInput = {
  /**
   * The URL of the video to upscale
   */
  video_url: string | Blob | File;
  /**
   * The scale factor Default value: `2`
   */
  scale?: number;
};
export type VideoUpscalerOutput = {
  /**
   * The stitched video
   */
  video: File;
};
export type VisionInput = {
  /**
   * Name of the model to use. Premium models are charged at 3x the rate of standard models, they include: openai/gpt-4o, anthropic/claude-3.5-sonnet, meta-llama/llama-3.2-90b-vision-instruct, google/gemini-pro-1.5, anthropic/claude-3-5-haiku. Default value: `"google/gemini-flash-1.5"`
   */
  model?:
    | "anthropic/claude-3.5-sonnet"
    | "anthropic/claude-3-haiku"
    | "google/gemini-pro-1.5"
    | "google/gemini-flash-1.5"
    | "google/gemini-flash-1.5-8b"
    | "openai/gpt-4o"
    | "meta-llama/llama-3.2-90b-vision-instruct";
  /**
   * Prompt to be used for the image
   */
  prompt: string;
  /**
   * System prompt to provide context or instructions to the model
   */
  system_prompt?: string;
  /**
   * URL of the image to be processed
   */
  image_url: string | Blob | File;
};
export type VTONInput = {
  /**
   * The number of inference steps to perform. Default value: `50`
   */
  num_inference_steps?: number;
  /**
   * The same seed and the same input given to the same version of the model
   * will output the same image every time.
   */
  seed?: number;
  /**
   * The CFG (Classifier Free Guidance) scale is a measure of how close you want
   * the model to stick to your input when generating the image. Default value: `2.5`
   */
  guidance_scale?: number;
  /**
   * If set to true, the function will wait for the image to be generated and uploaded
   * before returning the response. This will increase the latency of the function but
   * it allows you to get the image directly in the response without going through the CDN.
   */
  sync_mode?: boolean;
  /**
   * If set to true, the safety checker will be enabled. Default value: `true`
   */
  enable_safety_checker?: boolean;
  /**
   * The format of the generated image. Default value: `"png"`
   */
  output_format?: "jpeg" | "png";
  /**
   * Url for the human image.
   */
  human_image_url: string | Blob | File;
  /**
   * Url to the garment image.
   */
  garment_image_url: string | Blob | File;
};
export type VTONOutput = {
  /**
   * The output image.
   */
  image: Image;
  /**
   * The seed for the inference.
   */
  seed: number;
  /**
   * Whether the image contains NSFW concepts.
   */
  has_nsfw_concepts: boolean;
};
export type WaveformInput = {
  /**
   * URL of the audio file to analyze
   */
  media_url: string | Blob | File;
  /**
   * Controls how many points are sampled per second of audio. Lower values (e.g. 1-2) create a coarser waveform, higher values (e.g. 4-10) create a more detailed one. Default value: `4`
   */
  points_per_second?: number;
  /**
   * Number of decimal places for the waveform values. Higher values provide more precision but increase payload size. Default value: `2`
   */
  precision?: number;
  /**
   * Size of the smoothing window. Higher values create a smoother waveform. Must be an odd number. Default value: `3`
   */
  smoothing_window?: number;
};
export type WaveformOutput = {
  /**
   * Normalized waveform data as an array of values between -1 and 1. The number of points is determined by audio duration × points_per_second.
   */
  waveform: Array<number>;
  /**
   * Duration of the audio in seconds
   */
  duration: number;
  /**
   * Number of points in the waveform data
   */
  points: number;
  /**
   * Number of decimal places used in the waveform values
   */
  precision: number;
};
export type WhisperInput = {
  /**
   * URL of the audio file to transcribe. Supported formats: mp3, mp4, mpeg, mpga, m4a, wav or webm.
   */
  audio_url: string | Blob | File;
  /**
   * Task to perform on the audio file. Either transcribe or translate. Default value: `"transcribe"`
   */
  task?: "transcribe" | "translate";
  /**
   * Language of the audio file. If set to null, the language will be
   * automatically detected. Defaults to null.
   *
   * If translate is selected as the task, the audio will be translated to
   * English, regardless of the language selected.
   */
  language?:
    | "af"
    | "am"
    | "ar"
    | "as"
    | "az"
    | "ba"
    | "be"
    | "bg"
    | "bn"
    | "bo"
    | "br"
    | "bs"
    | "ca"
    | "cs"
    | "cy"
    | "da"
    | "de"
    | "el"
    | "en"
    | "es"
    | "et"
    | "eu"
    | "fa"
    | "fi"
    | "fo"
    | "fr"
    | "gl"
    | "gu"
    | "ha"
    | "haw"
    | "he"
    | "hi"
    | "hr"
    | "ht"
    | "hu"
    | "hy"
    | "id"
    | "is"
    | "it"
    | "ja"
    | "jw"
    | "ka"
    | "kk"
    | "km"
    | "kn"
    | "ko"
    | "la"
    | "lb"
    | "ln"
    | "lo"
    | "lt"
    | "lv"
    | "mg"
    | "mi"
    | "mk"
    | "ml"
    | "mn"
    | "mr"
    | "ms"
    | "mt"
    | "my"
    | "ne"
    | "nl"
    | "nn"
    | "no"
    | "oc"
    | "pa"
    | "pl"
    | "ps"
    | "pt"
    | "ro"
    | "ru"
    | "sa"
    | "sd"
    | "si"
    | "sk"
    | "sl"
    | "sn"
    | "so"
    | "sq"
    | "sr"
    | "su"
    | "sv"
    | "sw"
    | "ta"
    | "te"
    | "tg"
    | "th"
    | "tk"
    | "tl"
    | "tr"
    | "tt"
    | "uk"
    | "ur"
    | "uz"
    | "vi"
    | "yi"
    | "yo"
    | "yue"
    | "zh";
  /**
   * Whether to diarize the audio file. Defaults to false.
   */
  diarize?: boolean;
  /**
   * Level of the chunks to return. Either segment or word. Default value: `"segment"`
   */
  chunk_level?: "segment" | "word";
  /**
   * Version of the model to use. All of the models are the Whisper large variant. Default value: `"3"`
   */
  version?: "3";
  /**
   *  Default value: `64`
   */
  batch_size?: number;
  /**
   * Prompt to use for generation. Defaults to an empty string. Default value: `""`
   */
  prompt?: string;
  /**
   * Number of speakers in the audio file. Defaults to null.
   * If not provided, the number of speakers will be automatically
   * detected.
   */
  num_speakers?: number;
};
export type WhisperOutput = {
  /**
   * Transcription of the audio file
   */
  text: string;
  /**
   * Timestamp chunks of the audio file
   */
  chunks?: Array<WhisperChunk>;
  /**
   * List of languages that the audio file is inferred to be. Defaults to null.
   */
  inferred_languages: Array<
    | "af"
    | "am"
    | "ar"
    | "as"
    | "az"
    | "ba"
    | "be"
    | "bg"
    | "bn"
    | "bo"
    | "br"
    | "bs"
    | "ca"
    | "cs"
    | "cy"
    | "da"
    | "de"
    | "el"
    | "en"
    | "es"
    | "et"
    | "eu"
    | "fa"
    | "fi"
    | "fo"
    | "fr"
    | "gl"
    | "gu"
    | "ha"
    | "haw"
    | "he"
    | "hi"
    | "hr"
    | "ht"
    | "hu"
    | "hy"
    | "id"
    | "is"
    | "it"
    | "ja"
    | "jw"
    | "ka"
    | "kk"
    | "km"
    | "kn"
    | "ko"
    | "la"
    | "lb"
    | "ln"
    | "lo"
    | "lt"
    | "lv"
    | "mg"
    | "mi"
    | "mk"
    | "ml"
    | "mn"
    | "mr"
    | "ms"
    | "mt"
    | "my"
    | "ne"
    | "nl"
    | "nn"
    | "no"
    | "oc"
    | "pa"
    | "pl"
    | "ps"
    | "pt"
    | "ro"
    | "ru"
    | "sa"
    | "sd"
    | "si"
    | "sk"
    | "sl"
    | "sn"
    | "so"
    | "sq"
    | "sr"
    | "su"
    | "sv"
    | "sw"
    | "ta"
    | "te"
    | "tg"
    | "th"
    | "tk"
    | "tl"
    | "tr"
    | "tt"
    | "uk"
    | "ur"
    | "uz"
    | "vi"
    | "yi"
    | "yo"
    | "yue"
    | "zh"
  >;
  /**
   * Speaker diarization segments of the audio file. Only present if diarization is enabled.
   */
  diarization_segments: Array<DiarizationSegment>;
};
export type WizperInput = {
  /**
   * URL of the audio file to transcribe. Supported formats: mp3, mp4, mpeg, mpga, m4a, wav or webm.
   */
  audio_url: string | Blob | File;
  /**
   * Task to perform on the audio file. Either transcribe or translate. Default value: `"transcribe"`
   */
  task?: "transcribe" | "translate";
  /**
   * Language of the audio file.
   * If translate is selected as the task, the audio will be translated to
   * English, regardless of the language selected. Default value: `"en"`
   */
  language?:
    | "af"
    | "am"
    | "ar"
    | "as"
    | "az"
    | "ba"
    | "be"
    | "bg"
    | "bn"
    | "bo"
    | "br"
    | "bs"
    | "ca"
    | "cs"
    | "cy"
    | "da"
    | "de"
    | "el"
    | "en"
    | "es"
    | "et"
    | "eu"
    | "fa"
    | "fi"
    | "fo"
    | "fr"
    | "gl"
    | "gu"
    | "ha"
    | "haw"
    | "he"
    | "hi"
    | "hr"
    | "ht"
    | "hu"
    | "hy"
    | "id"
    | "is"
    | "it"
    | "ja"
    | "jw"
    | "ka"
    | "kk"
    | "km"
    | "kn"
    | "ko"
    | "la"
    | "lb"
    | "ln"
    | "lo"
    | "lt"
    | "lv"
    | "mg"
    | "mi"
    | "mk"
    | "ml"
    | "mn"
    | "mr"
    | "ms"
    | "mt"
    | "my"
    | "ne"
    | "nl"
    | "nn"
    | "no"
    | "oc"
    | "pa"
    | "pl"
    | "ps"
    | "pt"
    | "ro"
    | "ru"
    | "sa"
    | "sd"
    | "si"
    | "sk"
    | "sl"
    | "sn"
    | "so"
    | "sq"
    | "sr"
    | "su"
    | "sv"
    | "sw"
    | "ta"
    | "te"
    | "tg"
    | "th"
    | "tk"
    | "tl"
    | "tr"
    | "tt"
    | "uk"
    | "ur"
    | "uz"
    | "vi"
    | "yi"
    | "yo"
    | "yue"
    | "zh";
  /**
   * Level of the chunks to return. Default value: `"segment"`
   */
  chunk_level?: "segment";
  /**
   * Version of the model to use. All of the models are the Whisper large variant. Default value: `"3"`
   */
  version?: "3";
};
export type WizperOutput = {
  /**
   * Transcription of the audio file
   */
  text: string;
  /**
   * Timestamp chunks of the audio file
   */
  chunks: Array<WhisperChunk>;
};
export type WorkflowutilsCannyInput = {
  /**
   * Input image url.
   */
  image_url: string | Blob | File;
  /**
   * Low threshold for the hysteresis procedure Default value: `100`
   */
  low_threshold?: number;
  /**
   * High threshold for the hysteresis procedure Default value: `200`
   */
  high_threshold?: number;
};
export type WorkflowutilsCannyOutput = {
  /**
   * The output image
   */
  image: Image;
};
export type ZoeInput = {
  /**
   * URL of the image to process
   */
  image_url: string | Blob | File;
};
export type ZoeOutput = {
  /**
   * Image with depth map
   */
  image: Image;
};
export type EndpointTypeMap = {
  "modelrunner/sync-lipsync": {
    input: SyncLipsyncInput;
    output: SyncLipsyncOutput;
  };
  "modelrunner/minimax-music": {
    input: MinimaxMusicInput;
    output: MinimaxMusicOutput;
  };
  "modelrunner/flux-pro/v1.1-ultra": {
    input: FluxProV11UltraInput;
    output: FluxProV11UltraOutput;
  };
  "modelrunner/flux-pro/v1.1-ultra-finetuned": {
    input: FluxProV11UltraFinetunedInput;
    output: FluxProV11UltraFinetunedOutput;
  };
  "modelrunner/ideogram/v2": {
    input: IdeogramV2Input;
    output: IdeogramV2Output;
  };
  "modelrunner/hunyuan-video-lora-training": {
    input: HunyuanVideoLoraTrainingInput;
    output: HunyuanVideoLoraTrainingOutput;
  };
  "modelrunner/flux-lora-fast-training": {
    input: FluxLoraFastTrainingInput;
    output: FluxLoraFastTrainingOutput;
  };
  "modelrunner/flux-lora-portrait-trainer": {
    input: FluxLoraPortraitTrainerInput;
    output: FluxLoraPortraitTrainerOutput;
  };
  "modelrunner/flux-pro-trainer": {
    input: FluxProTrainerInput;
    output: FluxProTrainerOutput;
  };
  "modelrunner/recraft-v3": {
    input: RecraftV3Input;
    output: RecraftV3Output;
  };
  "modelrunner/minimax/video-01-live": {
    input: MinimaxVideo01LiveInput;
    output: MinimaxVideo01LiveOutput;
  };
  "modelrunner/minimax/video-01-live/image-to-video": {
    input: MinimaxVideo01LiveImageToVideoInput;
    output: MinimaxVideo01LiveImageToVideoOutput;
  };
  "modelrunner/minimax/video-01-subject-reference": {
    input: MinimaxVideo01SubjectReferenceInput;
    output: MinimaxVideo01SubjectReferenceOutput;
  };
  "modelrunner/haiper-video/v2": {
    input: HaiperVideoV2Input;
    output: HaiperVideoV2Output;
  };
  "modelrunner/haiper-video/v2.5/fast": {
    input: HaiperVideoV25FastInput;
    output: HaiperVideoV25FastOutput;
  };
  "modelrunner/hyper3d/rodin": {
    input: Hyper3dRodinInput;
    output: Hyper3dRodinOutput;
  };
  "modelrunner/aura-flow": {
    input: AuraFlowInput;
    output: AuraFlowOutput;
  };
  "modelrunner/flux/dev/image-to-image": {
    input: FluxDevImageToImageInput;
    output: FluxDevImageToImageOutput;
  };
  "modelrunner/flux/dev": {
    input: FluxDevInput;
    output: FluxDevOutput;
  };
  "modelrunner/flux-lora": {
    input: FluxLoraInput;
    output: FluxLoraOutput;
  };
  "modelrunner/flux-lora/inpainting": {
    input: FluxLoraInpaintingInput;
    output: FluxLoraInpaintingOutput;
  };
  "modelrunner/flux/schnell": {
    input: FluxSchnellInput;
    output: FluxSchnellOutput;
  };
  "modelrunner/flux-subject": {
    input: FluxSubjectInput;
    output: FluxSubjectOutput;
  };
  "modelrunner/flux/schnell/redux": {
    input: FluxSchnellReduxInput;
    output: FluxSchnellReduxOutput;
  };
  "modelrunner/flux/dev/redux": {
    input: FluxDevReduxInput;
    output: FluxDevReduxOutput;
  };
  "modelrunner/flux-pro/v1/redux": {
    input: FluxProV1ReduxInput;
    output: FluxProV1ReduxOutput;
  };
  "modelrunner/flux-pro/v1.1/redux": {
    input: FluxProV11ReduxInput;
    output: FluxProV11ReduxOutput;
  };
  "modelrunner/flux-pro/v1.1-ultra/redux": {
    input: FluxProV11UltraReduxInput;
    output: FluxProV11UltraReduxOutput;
  };
  "modelrunner/flux-pro/v1/fill": {
    input: FluxProV1FillInput;
    output: FluxProV1FillOutput;
  };
  "modelrunner/flux-pro/v1/fill-finetuned": {
    input: FluxProV1FillFinetunedInput;
    output: FluxProV1FillFinetunedOutput;
  };
  "modelrunner/flux-pro/v1/canny": {
    input: FluxProV1CannyInput;
    output: FluxProV1CannyOutput;
  };
  "modelrunner/flux-pro/v1/canny-finetuned": {
    input: FluxProV1CannyFinetunedInput;
    output: FluxProV1CannyFinetunedOutput;
  };
  "modelrunner/flux-pro/v1/depth": {
    input: FluxProV1DepthInput;
    output: FluxProV1DepthOutput;
  };
  "modelrunner/flux-pro/v1/depth-finetuned": {
    input: FluxProV1DepthFinetunedInput;
    output: FluxProV1DepthFinetunedOutput;
  };
  "modelrunner/flux-lora-canny": {
    input: FluxLoraCannyInput;
    output: FluxLoraCannyOutput;
  };
  "modelrunner/flux-lora-depth": {
    input: FluxLoraDepthInput;
    output: FluxLoraDepthOutput;
  };
  "modelrunner/flux-pro/v1.1": {
    input: FluxProV11Input;
    output: FluxProV11Output;
  };
  "modelrunner/flux-pro/new": {
    input: FluxProNewInput;
    output: FluxProNewOutput;
  };
  "modelrunner/sana": {
    input: SanaInput;
    output: SanaOutput;
  };
  "modelrunner/omnigen-v1": {
    input: OmnigenV1Input;
    output: OmnigenV1Output;
  };
  "modelrunner/stable-diffusion-v35-large": {
    input: StableDiffusionV35LargeInput;
    output: StableDiffusionV35LargeOutput;
  };
  "modelrunner/stable-diffusion-v35-medium": {
    input: StableDiffusionV35MediumInput;
    output: StableDiffusionV35MediumOutput;
  };
  "modelrunner/switti": {
    input: SwittiInput;
    output: SwittiOutput;
  };
  "modelrunner/switti/512": {
    input: Switti512Input;
    output: Switti512Output;
  };
  "modelrunner/recraft-v3/create-style": {
    input: RecraftV3CreateStyleInput;
    output: RecraftV3CreateStyleOutput;
  };
  "modelrunner/minimax/video-01/image-to-video": {
    input: MinimaxVideo01ImageToVideoInput;
    output: MinimaxVideo01ImageToVideoOutput;
  };
  "modelrunner/recraft-20b": {
    input: Recraft20bInput;
    output: Recraft20bOutput;
  };
  "modelrunner/ideogram/v2/edit": {
    input: IdeogramV2EditInput;
    output: IdeogramV2EditOutput;
  };
  "modelrunner/ideogram/v2/remix": {
    input: IdeogramV2RemixInput;
    output: IdeogramV2RemixOutput;
  };
  "modelrunner/ideogram/v2/turbo": {
    input: IdeogramV2TurboInput;
    output: IdeogramV2TurboOutput;
  };
  "modelrunner/ideogram/v2/turbo/edit": {
    input: IdeogramV2TurboEditInput;
    output: IdeogramV2TurboEditOutput;
  };
  "modelrunner/ideogram/v2/turbo/remix": {
    input: IdeogramV2TurboRemixInput;
    output: IdeogramV2TurboRemixOutput;
  };
  "modelrunner/bria/text-to-image/base": {
    input: BriaTextToImageBaseInput;
    output: BriaTextToImageBaseOutput;
  };
  "modelrunner/bria/text-to-image/fast": {
    input: BriaTextToImageFastInput;
    output: BriaTextToImageFastOutput;
  };
  "modelrunner/bria/text-to-image/hd": {
    input: BriaTextToImageHdInput;
    output: BriaTextToImageHdOutput;
  };
  "modelrunner/bria/eraser": {
    input: BriaEraserInput;
    output: BriaEraserOutput;
  };
  "modelrunner/bria/product-shot": {
    input: BriaProductShotInput;
    output: BriaProductShotOutput;
  };
  "modelrunner/bria/background/replace": {
    input: BriaBackgroundReplaceInput;
    output: BriaBackgroundReplaceOutput;
  };
  "modelrunner/bria/genfill": {
    input: BriaGenfillInput;
    output: BriaGenfillOutput;
  };
  "modelrunner/bria/expand": {
    input: BriaExpandInput;
    output: BriaExpandOutput;
  };
  "modelrunner/bria/background/remove": {
    input: BriaBackgroundRemoveInput;
    output: BriaBackgroundRemoveOutput;
  };
  "modelrunner/flux-lora-fill": {
    input: FluxLoraFillInput;
    output: FluxLoraFillOutput;
  };
  "modelrunner/flux-lora/image-to-image": {
    input: FluxLoraImageToImageInput;
    output: FluxLoraImageToImageOutput;
  };
  "modelrunner/flux-general": {
    input: FluxGeneralInput;
    output: FluxGeneralOutput;
  };
  "modelrunner/flux-general/inpainting": {
    input: FluxGeneralInpaintingInput;
    output: FluxGeneralInpaintingOutput;
  };
  "modelrunner/flux-general/image-to-image": {
    input: FluxGeneralImageToImageInput;
    output: FluxGeneralImageToImageOutput;
  };
  "modelrunner/flux-general/differential-diffusion": {
    input: FluxGeneralDifferentialDiffusionInput;
    output: FluxGeneralDifferentialDiffusionOutput;
  };
  "modelrunner/flux-general/rf-inversion": {
    input: FluxGeneralRfInversionInput;
    output: FluxGeneralRfInversionOutput;
  };
  "modelrunner/flux-pulid": {
    input: FluxPulidInput;
    output: FluxPulidOutput;
  };
  "modelrunner/iclight-v2": {
    input: IclightV2Input;
    output: IclightV2Output;
  };
  "modelrunner/flux-differential-diffusion": {
    input: FluxDifferentialDiffusionInput;
    output: FluxDifferentialDiffusionOutput;
  };
  "modelrunner/stable-diffusion-v3-medium": {
    input: StableDiffusionV3MediumInput;
    output: StableDiffusionV3MediumOutput;
  };
  "modelrunner/stable-diffusion-v3-medium/image-to-image": {
    input: StableDiffusionV3MediumImageToImageInput;
    output: StableDiffusionV3MediumImageToImageOutput;
  };
  "modelrunner/fast-sdxl": {
    input: FastSdxlInput;
    output: FastSdxlOutput;
  };
  "modelrunner/lora": {
    input: LoraInput;
    output: LoraOutput;
  };
  "modelrunner/aura-sr": {
    input: AuraSrInput;
    output: AuraSrOutput;
  };
  "modelrunner/stable-cascade": {
    input: StableCascadeInput;
    output: StableCascadeOutput;
  };
  "modelrunner/minimax/video-01": {
    input: MinimaxVideo01Input;
    output: MinimaxVideo01Output;
  };
  "modelrunner/haiper-video/v2/image-to-video": {
    input: HaiperVideoV2ImageToVideoInput;
    output: HaiperVideoV2ImageToVideoOutput;
  };
  "modelrunner/haiper-video/v2.5/image-to-video/fast": {
    input: HaiperVideoV25ImageToVideoFastInput;
    output: HaiperVideoV25ImageToVideoFastOutput;
  };
  "modelrunner/mochi-v1": {
    input: MochiV1Input;
    output: MochiV1Output;
  };
  "modelrunner/hunyuan-video": {
    input: HunyuanVideoInput;
    output: HunyuanVideoOutput;
  };
  "modelrunner/hunyuan-video-lora": {
    input: HunyuanVideoLoraInput;
    output: HunyuanVideoLoraOutput;
  };
  "modelrunner/video-upscaler": {
    input: VideoUpscalerInput;
    output: VideoUpscalerOutput;
  };
  "modelrunner/auto-caption": {
    input: AutoCaptionInput;
    output: AutoCaptionOutput;
  };
  "modelrunner/mmaudio-v2": {
    input: MmaudioV2Input;
    output: MmaudioV2Output;
  };
  "modelrunner/mmaudio-v2/text-to-audio": {
    input: MmaudioV2TextToAudioInput;
    output: MmaudioV2TextToAudioOutput;
  };
  "modelrunner/luma-dream-machine": {
    input: LumaDreamMachineInput;
    output: LumaDreamMachineOutput;
  };
  "modelrunner/luma-dream-machine/image-to-video": {
    input: LumaDreamMachineImageToVideoInput;
    output: LumaDreamMachineImageToVideoOutput;
  };
  "modelrunner/luma-photon": {
    input: LumaPhotonInput;
    output: LumaPhotonOutput;
  };
  "modelrunner/luma-photon/flash": {
    input: LumaPhotonFlashInput;
    output: LumaPhotonFlashOutput;
  };
  "modelrunner/kling/v1-5/kolors-virtual-try-on": {
    input: KlingV15KolorsVirtualTryOnInput;
    output: KlingV15KolorsVirtualTryOnOutput;
  };
  "modelrunner/kling-video/v1/standard/text-to-video": {
    input: KlingVideoV1StandardTextToVideoInput;
    output: KlingVideoV1StandardTextToVideoOutput;
  };
  "modelrunner/kling-video/v1/standard/image-to-video": {
    input: KlingVideoV1StandardImageToVideoInput;
    output: KlingVideoV1StandardImageToVideoOutput;
  };
  "modelrunner/kling-video/v1/pro/text-to-video": {
    input: KlingVideoV1ProTextToVideoInput;
    output: KlingVideoV1ProTextToVideoOutput;
  };
  "modelrunner/kling-video/v1/pro/image-to-video": {
    input: KlingVideoV1ProImageToVideoInput;
    output: KlingVideoV1ProImageToVideoOutput;
  };
  "modelrunner/kling-video/v1.5/pro/image-to-video": {
    input: KlingVideoV15ProImageToVideoInput;
    output: KlingVideoV15ProImageToVideoOutput;
  };
  "modelrunner/kling-video/v1.5/pro/text-to-video": {
    input: KlingVideoV15ProTextToVideoInput;
    output: KlingVideoV15ProTextToVideoOutput;
  };
  "modelrunner/kling-video/v1.6/standard/image-to-video": {
    input: KlingVideoV16StandardImageToVideoInput;
    output: KlingVideoV16StandardImageToVideoOutput;
  };
  "modelrunner/kling-video/v1.6/standard/text-to-video": {
    input: KlingVideoV16StandardTextToVideoInput;
    output: KlingVideoV16StandardTextToVideoOutput;
  };
  "modelrunner/kling-video/v1.6/pro/image-to-video": {
    input: KlingVideoV16ProImageToVideoInput;
    output: KlingVideoV16ProImageToVideoOutput;
  };
  "modelrunner/transpixar": {
    input: TranspixarInput;
    output: TranspixarOutput;
  };
  "modelrunner/cogvideox-5b": {
    input: Cogvideox5bInput;
    output: Cogvideox5bOutput;
  };
  "modelrunner/cogvideox-5b/video-to-video": {
    input: Cogvideox5bVideoToVideoInput;
    output: Cogvideox5bVideoToVideoOutput;
  };
  "modelrunner/cogvideox-5b/image-to-video": {
    input: Cogvideox5bImageToVideoInput;
    output: Cogvideox5bImageToVideoOutput;
  };
  "modelrunner/ltx-video": {
    input: LtxVideoInput;
    output: LtxVideoOutput;
  };
  "modelrunner/ltx-video/image-to-video": {
    input: LtxVideoImageToVideoInput;
    output: LtxVideoImageToVideoOutput;
  };
  "modelrunner/stable-video": {
    input: StableVideoInput;
    output: StableVideoOutput;
  };
  "modelrunner/fast-svd/text-to-video": {
    input: FastSvdTextToVideoInput;
    output: FastSvdTextToVideoOutput;
  };
  "modelrunner/fast-svd-lcm": {
    input: FastSvdLcmInput;
    output: FastSvdLcmOutput;
  };
  "modelrunner/birefnet": {
    input: BirefnetInput;
    output: BirefnetOutput;
  };
  "modelrunner/birefnet/v2": {
    input: BirefnetV2Input;
    output: BirefnetV2Output;
  };
  "modelrunner/fast-svd-lcm/text-to-video": {
    input: FastSvdLcmTextToVideoInput;
    output: FastSvdLcmTextToVideoOutput;
  };
  "modelrunner/creative-upscaler": {
    input: CreativeUpscalerInput;
    output: CreativeUpscalerOutput;
  };
  "modelrunner/ffmpeg-api/compose": {
    input: FfmpegApiComposeInput;
    output: FfmpegApiComposeOutput;
  };
  "modelrunner/ffmpeg-api/metadata": {
    input: FfmpegApiMetadataInput;
    output: FfmpegApiMetadataOutput;
  };
  "modelrunner/ffmpeg-api/waveform": {
    input: FfmpegApiWaveformInput;
    output: FfmpegApiWaveformOutput;
  };
  "modelrunner/clarity-upscaler": {
    input: ClarityUpscalerInput;
    output: ClarityUpscalerOutput;
  };
  "modelrunner/ccsr": {
    input: CcsrInput;
    output: CcsrOutput;
  };
  "modelrunner/fast-turbo-diffusion": {
    input: FastTurboDiffusionInput;
    output: FastTurboDiffusionOutput;
  };
  "modelrunner/fast-turbo-diffusion/image-to-image": {
    input: FastTurboDiffusionImageToImageInput;
    output: FastTurboDiffusionImageToImageOutput;
  };
  "modelrunner/fast-turbo-diffusion/inpainting": {
    input: FastTurboDiffusionInpaintingInput;
    output: FastTurboDiffusionInpaintingOutput;
  };
  "modelrunner/fast-lcm-diffusion": {
    input: FastLcmDiffusionInput;
    output: FastLcmDiffusionOutput;
  };
  "modelrunner/fast-lcm-diffusion/image-to-image": {
    input: FastLcmDiffusionImageToImageInput;
    output: FastLcmDiffusionImageToImageOutput;
  };
  "modelrunner/fast-lcm-diffusion/inpainting": {
    input: FastLcmDiffusionInpaintingInput;
    output: FastLcmDiffusionInpaintingOutput;
  };
  "modelrunner/whisper": {
    input: WhisperInput;
    output: WhisperOutput;
  };
  "modelrunner/wizper": {
    input: WizperInput;
    output: WizperOutput;
  };
  "modelrunner/fast-lightning-sdxl": {
    input: FastLightningSdxlInput;
    output: FastLightningSdxlOutput;
  };
  "modelrunner/fast-lightning-sdxl/image-to-image": {
    input: FastLightningSdxlImageToImageInput;
    output: FastLightningSdxlImageToImageOutput;
  };
  "modelrunner/fast-lightning-sdxl/inpainting": {
    input: FastLightningSdxlInpaintingInput;
    output: FastLightningSdxlInpaintingOutput;
  };
  "modelrunner/hyper-sdxl": {
    input: HyperSdxlInput;
    output: HyperSdxlOutput;
  };
  "modelrunner/hyper-sdxl/image-to-image": {
    input: HyperSdxlImageToImageInput;
    output: HyperSdxlImageToImageOutput;
  };
  "modelrunner/hyper-sdxl/inpainting": {
    input: HyperSdxlInpaintingInput;
    output: HyperSdxlInpaintingOutput;
  };
  "modelrunner/playground-v25": {
    input: PlaygroundV25Input;
    output: PlaygroundV25Output;
  };
  "modelrunner/playground-v25/image-to-image": {
    input: PlaygroundV25ImageToImageInput;
    output: PlaygroundV25ImageToImageOutput;
  };
  "modelrunner/playground-v25/inpainting": {
    input: PlaygroundV25InpaintingInput;
    output: PlaygroundV25InpaintingOutput;
  };
  "modelrunner/amt-interpolation": {
    input: AmtInterpolationInput;
    output: AmtInterpolationOutput;
  };
  "modelrunner/amt-interpolation/frame-interpolation": {
    input: AmtInterpolationFrameInterpolationInput;
    output: AmtInterpolationFrameInterpolationOutput;
  };
  "modelrunner/t2v-turbo": {
    input: T2vTurboInput;
    output: T2vTurboOutput;
  };
  "modelrunner/sd15-depth-controlnet": {
    input: Sd15DepthControlnetInput;
    output: Sd15DepthControlnetOutput;
  };
  "modelrunner/photomaker": {
    input: PhotomakerInput;
    output: PhotomakerOutput;
  };
  "modelrunner/lcm": {
    input: LcmInput;
    output: LcmOutput;
  };
  "modelrunner/lcm-sd15-i2i": {
    input: LcmSd15I2iInput;
    output: LcmSd15I2iOutput;
  };
  "modelrunner/fooocus": {
    input: FooocusInput;
    output: FooocusOutput;
  };
  "modelrunner/animatediff-v2v": {
    input: AnimatediffV2vInput;
    output: AnimatediffV2vOutput;
  };
  "modelrunner/animatediff-v2v/turbo": {
    input: AnimatediffV2vTurboInput;
    output: AnimatediffV2vTurboOutput;
  };
  "modelrunner/fast-animatediff/text-to-video": {
    input: FastAnimatediffTextToVideoInput;
    output: FastAnimatediffTextToVideoOutput;
  };
  "modelrunner/fast-animatediff/video-to-video": {
    input: FastAnimatediffVideoToVideoInput;
    output: FastAnimatediffVideoToVideoOutput;
  };
  "modelrunner/fast-animatediff/turbo/text-to-video": {
    input: FastAnimatediffTurboTextToVideoInput;
    output: FastAnimatediffTurboTextToVideoOutput;
  };
  "modelrunner/fast-animatediff/turbo/video-to-video": {
    input: FastAnimatediffTurboVideoToVideoInput;
    output: FastAnimatediffTurboVideoToVideoOutput;
  };
  "modelrunner/illusion-diffusion": {
    input: IllusionDiffusionInput;
    output: IllusionDiffusionOutput;
  };
  "modelrunner/imageutils/depth": {
    input: ImageutilsDepthInput;
    output: ImageutilsDepthOutput;
  };
  "modelrunner/imageutils/rembg": {
    input: ImageutilsRembgInput;
    output: ImageutilsRembgOutput;
  };
  "modelrunner/esrgan": {
    input: EsrganInput;
    output: EsrganOutput;
  };
  "modelrunner/controlnetsdxl": {
    input: ControlnetsdxlInput;
    output: ControlnetsdxlOutput;
  };
  "modelrunner/fast-sdxl-controlnet-canny": {
    input: FastSdxlControlnetCannyInput;
    output: FastSdxlControlnetCannyOutput;
  };
  "modelrunner/fast-sdxl-controlnet-canny/image-to-image": {
    input: FastSdxlControlnetCannyImageToImageInput;
    output: FastSdxlControlnetCannyImageToImageOutput;
  };
  "modelrunner/fast-sdxl-controlnet-canny/inpainting": {
    input: FastSdxlControlnetCannyInpaintingInput;
    output: FastSdxlControlnetCannyInpaintingOutput;
  };
  "modelrunner/inpaint": {
    input: InpaintInput;
    output: InpaintOutput;
  };
  "modelrunner/animatediff-sparsectrl-lcm": {
    input: AnimatediffSparsectrlLcmInput;
    output: AnimatediffSparsectrlLcmOutput;
  };
  "modelrunner/pulid": {
    input: PulidInput;
    output: PulidOutput;
  };
  "modelrunner/ip-adapter-face-id": {
    input: IpAdapterFaceIdInput;
    output: IpAdapterFaceIdOutput;
  };
  "modelrunner/imageutils/marigold-depth": {
    input: ImageutilsMarigoldDepthInput;
    output: ImageutilsMarigoldDepthOutput;
  };
  "modelrunner/stable-audio": {
    input: StableAudioInput;
    output: StableAudioOutput;
  };
  "modelrunner/diffusion-edge": {
    input: DiffusionEdgeInput;
    output: DiffusionEdgeOutput;
  };
  "modelrunner/triposr": {
    input: TriposrInput;
    output: TriposrOutput;
  };
  "modelrunner/fooocus/upscale-or-vary": {
    input: FooocusUpscaleOrVaryInput;
    output: FooocusUpscaleOrVaryOutput;
  };
  "modelrunner/fooocus/image-prompt": {
    input: FooocusImagePromptInput;
    output: FooocusImagePromptOutput;
  };
  "modelrunner/fooocus/inpaint": {
    input: FooocusInpaintInput;
    output: FooocusInpaintOutput;
  };
  "modelrunner/retoucher": {
    input: RetoucherInput;
    output: RetoucherOutput;
  };
  "modelrunner/any-llm": {
    input: AnyLlmInput;
    output: AnyLlmOutput;
  };
  "modelrunner/any-llm/vision": {
    input: AnyLlmVisionInput;
    output: AnyLlmVisionOutput;
  };
  "modelrunner/llavav15-13b": {
    input: Llavav1513bInput;
    output: Llavav1513bOutput;
  };
  "modelrunner/llava-next": {
    input: LlavaNextInput;
    output: LlavaNextOutput;
  };
  "modelrunner/imageutils/nsfw": {
    input: ImageutilsNsfwInput;
    output: ImageutilsNsfwOutput;
  };
  "modelrunner/fast-fooocus-sdxl": {
    input: FastFooocusSdxlInput;
    output: FastFooocusSdxlOutput;
  };
  "modelrunner/fast-fooocus-sdxl/image-to-image": {
    input: FastFooocusSdxlImageToImageInput;
    output: FastFooocusSdxlImageToImageOutput;
  };
  "modelrunner/face-to-sticker": {
    input: FaceToStickerInput;
    output: FaceToStickerOutput;
  };
  "modelrunner/moondream/batched": {
    input: MoondreamBatchedInput;
    output: MoondreamBatchedOutput;
  };
  "modelrunner/sadtalker": {
    input: SadtalkerInput;
    output: SadtalkerOutput;
  };
  "modelrunner/musetalk": {
    input: MusetalkInput;
    output: MusetalkOutput;
  };
  "modelrunner/dubbing": {
    input: DubbingInput;
    output: DubbingOutput;
  };
  "modelrunner/sadtalker/reference": {
    input: SadtalkerReferenceInput;
    output: SadtalkerReferenceOutput;
  };
  "modelrunner/layer-diffusion": {
    input: LayerDiffusionInput;
    output: LayerDiffusionOutput;
  };
  "modelrunner/stable-diffusion-v15": {
    input: StableDiffusionV15Input;
    output: StableDiffusionV15Output;
  };
  "modelrunner/lora/image-to-image": {
    input: LoraImageToImageInput;
    output: LoraImageToImageOutput;
  };
  "modelrunner/fast-sdxl/image-to-image": {
    input: FastSdxlImageToImageInput;
    output: FastSdxlImageToImageOutput;
  };
  "modelrunner/fast-sdxl/inpainting": {
    input: FastSdxlInpaintingInput;
    output: FastSdxlInpaintingOutput;
  };
  "modelrunner/lora/inpaint": {
    input: LoraInpaintInput;
    output: LoraInpaintOutput;
  };
  "modelrunner/pixart-sigma": {
    input: PixartSigmaInput;
    output: PixartSigmaOutput;
  };
  "modelrunner/dreamshaper": {
    input: DreamshaperInput;
    output: DreamshaperOutput;
  };
  "modelrunner/realistic-vision": {
    input: RealisticVisionInput;
    output: RealisticVisionOutput;
  };
  "modelrunner/lightning-models": {
    input: LightningModelsInput;
    output: LightningModelsOutput;
  };
  "modelrunner/omni-zero": {
    input: OmniZeroInput;
    output: OmniZeroOutput;
  };
  "modelrunner/leffa/virtual-tryon": {
    input: LeffaVirtualTryonInput;
    output: LeffaVirtualTryonOutput;
  };
  "modelrunner/leffa/pose-transfer": {
    input: LeffaPoseTransferInput;
    output: LeffaPoseTransferOutput;
  };
  "modelrunner/cat-vton": {
    input: CatVtonInput;
    output: CatVtonOutput;
  };
  "modelrunner/dwpose": {
    input: DwposeInput;
    output: DwposeOutput;
  };
  "modelrunner/stable-cascade/sote-diffusion": {
    input: StableCascadeSoteDiffusionInput;
    output: StableCascadeSoteDiffusionOutput;
  };
  "modelrunner/florence-2-large/caption": {
    input: Florence2LargeCaptionInput;
    output: Florence2LargeCaptionOutput;
  };
  "modelrunner/florence-2-large/detailed-caption": {
    input: Florence2LargeDetailedCaptionInput;
    output: Florence2LargeDetailedCaptionOutput;
  };
  "modelrunner/florence-2-large/more-detailed-caption": {
    input: Florence2LargeMoreDetailedCaptionInput;
    output: Florence2LargeMoreDetailedCaptionOutput;
  };
  "modelrunner/florence-2-large/object-detection": {
    input: Florence2LargeObjectDetectionInput;
    output: Florence2LargeObjectDetectionOutput;
  };
  "modelrunner/florence-2-large/dense-region-caption": {
    input: Florence2LargeDenseRegionCaptionInput;
    output: Florence2LargeDenseRegionCaptionOutput;
  };
  "modelrunner/florence-2-large/region-proposal": {
    input: Florence2LargeRegionProposalInput;
    output: Florence2LargeRegionProposalOutput;
  };
  "modelrunner/florence-2-large/caption-to-phrase-grounding": {
    input: Florence2LargeCaptionToPhraseGroundingInput;
    output: Florence2LargeCaptionToPhraseGroundingOutput;
  };
  "modelrunner/florence-2-large/referring-expression-segmentation": {
    input: Florence2LargeReferringExpressionSegmentationInput;
    output: Florence2LargeReferringExpressionSegmentationOutput;
  };
  "modelrunner/florence-2-large/region-to-segmentation": {
    input: Florence2LargeRegionToSegmentationInput;
    output: Florence2LargeRegionToSegmentationOutput;
  };
  "modelrunner/florence-2-large/open-vocabulary-detection": {
    input: Florence2LargeOpenVocabularyDetectionInput;
    output: Florence2LargeOpenVocabularyDetectionOutput;
  };
  "modelrunner/florence-2-large/region-to-category": {
    input: Florence2LargeRegionToCategoryInput;
    output: Florence2LargeRegionToCategoryOutput;
  };
  "modelrunner/florence-2-large/region-to-description": {
    input: Florence2LargeRegionToDescriptionInput;
    output: Florence2LargeRegionToDescriptionOutput;
  };
  "modelrunner/florence-2-large/ocr": {
    input: Florence2LargeOcrInput;
    output: Florence2LargeOcrOutput;
  };
  "modelrunner/florence-2-large/ocr-with-region": {
    input: Florence2LargeOcrWithRegionInput;
    output: Florence2LargeOcrWithRegionOutput;
  };
  "modelrunner/era-3d": {
    input: Era3dInput;
    output: Era3dOutput;
  };
  "modelrunner/live-portrait": {
    input: LivePortraitInput;
    output: LivePortraitOutput;
  };
  "modelrunner/live-portrait/image": {
    input: LivePortraitImageInput;
    output: LivePortraitImageOutput;
  };
  "modelrunner/muse-pose": {
    input: MusePoseInput;
    output: MusePoseOutput;
  };
  "modelrunner/kolors": {
    input: KolorsInput;
    output: KolorsOutput;
  };
  "modelrunner/kolors/image-to-image": {
    input: KolorsImageToImageInput;
    output: KolorsImageToImageOutput;
  };
  "modelrunner/sdxl-controlnet-union": {
    input: SdxlControlnetUnionInput;
    output: SdxlControlnetUnionOutput;
  };
  "modelrunner/sdxl-controlnet-union/image-to-image": {
    input: SdxlControlnetUnionImageToImageInput;
    output: SdxlControlnetUnionImageToImageOutput;
  };
  "modelrunner/sdxl-controlnet-union/inpainting": {
    input: SdxlControlnetUnionInpaintingInput;
    output: SdxlControlnetUnionInpaintingOutput;
  };
  "modelrunner/sam2/image": {
    input: Sam2ImageInput;
    output: Sam2ImageOutput;
  };
  "modelrunner/sam2/video": {
    input: Sam2VideoInput;
    output: Sam2VideoOutput;
  };
  "modelrunner/imageutils/sam": {
    input: ImageutilsSamInput;
    output: ImageutilsSamOutput;
  };
  "modelrunner/sa2va/8b/image": {
    input: Sa2va8bImageInput;
    output: Sa2va8bImageOutput;
  };
  "modelrunner/sa2va/8b/video": {
    input: Sa2va8bVideoInput;
    output: Sa2va8bVideoOutput;
  };
  "modelrunner/sa2va/4b/image": {
    input: Sa2va4bImageInput;
    output: Sa2va4bImageOutput;
  };
  "modelrunner/sa2va/4b/video": {
    input: Sa2va4bVideoInput;
    output: Sa2va4bVideoOutput;
  };
  "modelrunner/mini-cpm": {
    input: MiniCpmInput;
    output: MiniCpmOutput;
  };
  "modelrunner/mini-cpm/video": {
    input: MiniCpmVideoInput;
    output: MiniCpmVideoOutput;
  };
  "modelrunner/controlnext": {
    input: ControlnextInput;
    output: ControlnextOutput;
  };
  "modelrunner/workflowutils/canny": {
    input: WorkflowutilsCannyInput;
    output: WorkflowutilsCannyOutput;
  };
  "modelrunner/image-preprocessors/depth-anything/v2": {
    input: ImagePreprocessorsDepthAnythingV2Input;
    output: ImagePreprocessorsDepthAnythingV2Output;
  };
  "modelrunner/image-preprocessors/hed": {
    input: ImagePreprocessorsHedInput;
    output: ImagePreprocessorsHedOutput;
  };
  "modelrunner/image-preprocessors/lineart": {
    input: ImagePreprocessorsLineartInput;
    output: ImagePreprocessorsLineartOutput;
  };
  "modelrunner/image-preprocessors/midas": {
    input: ImagePreprocessorsMidasInput;
    output: ImagePreprocessorsMidasOutput;
  };
  "modelrunner/image-preprocessors/mlsd": {
    input: ImagePreprocessorsMlsdInput;
    output: ImagePreprocessorsMlsdOutput;
  };
  "modelrunner/image-preprocessors/pidi": {
    input: ImagePreprocessorsPidiInput;
    output: ImagePreprocessorsPidiOutput;
  };
  "modelrunner/image-preprocessors/sam": {
    input: ImagePreprocessorsSamInput;
    output: ImagePreprocessorsSamOutput;
  };
  "modelrunner/image-preprocessors/scribble": {
    input: ImagePreprocessorsScribbleInput;
    output: ImagePreprocessorsScribbleOutput;
  };
  "modelrunner/image-preprocessors/teed": {
    input: ImagePreprocessorsTeedInput;
    output: ImagePreprocessorsTeedOutput;
  };
  "modelrunner/image-preprocessors/zoe": {
    input: ImagePreprocessorsZoeInput;
    output: ImagePreprocessorsZoeOutput;
  };
  "modelrunner/f5-tts": {
    input: F5TtsInput;
    output: F5TtsOutput;
  };
  "fashn/tryon": {
    input: TryonInput;
    output: TryonOutput;
  };
  "modelrunner/trellis": {
    input: TrellisInput;
    output: TrellisOutput;
  };
  "modelrunner/playai/tts/v3": {
    input: PlayaiTtsV3Input;
    output: PlayaiTtsV3Output;
  };
  "modelrunner/playai/tts/dialog": {
    input: PlayaiTtsDialogInput;
    output: PlayaiTtsDialogOutput;
  };
  "modelrunner/latentsync": {
    input: LatentsyncInput;
    output: LatentsyncOutput;
  };
  "modelrunner/moondream-next": {
    input: MoondreamNextInput;
    output: MoondreamNextOutput;
  };
  "modelrunner/moondream-next/detection": {
    input: MoondreamNextDetectionInput;
    output: MoondreamNextDetectionOutput;
  };
  "modelrunner/moondream-next/batch": {
    input: MoondreamNextBatchInput;
    output: MoondreamNextBatchOutput;
  };
  "modelrunner/recraft-clarity-upscale": {
    input: RecraftClarityUpscaleInput;
    output: RecraftClarityUpscaleOutput;
  };
  "modelrunner/recraft-creative-upscale": {
    input: RecraftCreativeUpscaleInput;
    output: RecraftCreativeUpscaleOutput;
  };
};
