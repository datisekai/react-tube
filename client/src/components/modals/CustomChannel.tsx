import React, { FC, useState } from "react";
import AvatarCircle from "../AvatarCircle";
import TextInput from "../customs/TextInput";
import { useForm } from "react-hook-form";

interface CustomChannelProps {
  elementClick: React.ReactNode;
}

const CustomChannel: FC<CustomChannelProps> = ({ elementClick }) => {
  const {
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const [avatar, setAvatar] = useState<{
    preview: string;
    file: File;
  }>();

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files && e.target.files[0]) as File;
    setAvatar({
      file,
      preview: URL.createObjectURL(file),
    });
  };
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal">{elementClick}</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal z-[1000] ">
        <div className="modal-box space-y-4">
          <h3 className="font-bold text-lg">Tùy chỉnh kênh</h3>
          <div className="flex items-center gap-x-4">
            <AvatarCircle url={avatar?.preview} width="w-20" />
            <input type="file" accept="image/*" onChange={handleChangeImage} />
          </div>
          <div>
            <h3>Username</h3>
            <TextInput control={control} error={errors} name="username" />
          </div>
          <div>
            <h3>Email</h3>
            <TextInput control={control} error={errors} name="email" />
          </div>
          <div className="modal-action">
            <div className="flex items-center gap-x-2">
              <label
                htmlFor="my-modal"
                className="btn btn-neutral text-neutral-content"
              >
                Đóng
              </label>
              <button className="btn btn-primary text-primary-content">
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomChannel;
