import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactPlayer from "react-player";
import TextInput from "../components/customs/TextInput";
import ProgressBar from "../components/ProgressBar";
import Select from "../components/customs/Select";
import TextEditor from "../components/TextEditor";

const UploadVideo = () => {
  const [video, setVideo] = useState<{
    preview: string;
    file: File;
  }>();

  const handleChangeVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files && e.target.files[0]) as File;
    setVideo({
      file,
      preview: URL.createObjectURL(file),
    });
  };

  const [description, setDescription] = useState("");

  const {
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
    },
  });

  return (
    <div className="mt-2 pb-10 space-y-4">
      {/* <div className="max-w-md">
        <ProgressBar percent={20} />
      </div> */}
      <h1 className="font-bold">Tải lên video của bạn</h1>
      <div className="flex items-start md:items-center  flex-col md:flex-row gap-4">
        <div className=" flex-1 w-full space-y-2  ">
          <div className="bg-neutral w-full">
            <ReactPlayer
              width={"100%"}
              url={video?.preview}
              muted={true}
              controls
            />
          </div>
        </div>

        <div className="flex-1 w-full space-y-4">
          <input
            type="file"
            accept="video/*"
            onChange={handleChangeVideo}
            className="file-input file-input-bordered w-full max-w-xs flex-1"
          />
          <div className="max-w-full md:max-w-sm">
            <h3>Tiêu đề</h3>
            <TextInput control={control} error={errors} name="title" />
          </div>

          <div className="max-w-full md:max-w-sm">
            <h3>Danh mục</h3>
            <Select
              data={[{ text: "Âm nhạc", value: 1 }]}
              control={control}
              error={errors}
              name="title"
            />
          </div>
        </div>
      </div>
      <div className="max-w-full ">
        <h3>Mô tả</h3>
        <TextEditor height="250" onChange={setDescription} />
      </div>
      <div className="flex  max-w-full ">
        <button className="btn btn-primary">Lưu video</button>
      </div>
    </div>
  );
};

export default UploadVideo;
