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

export type EndpointTypeMap = {
  "modelrunner/sync-lipsync": {
    input: SyncLipsyncInput;
    output: SyncLipsyncOutput;
  };
};
