import React, { useState } from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import AvatarCircle from "../components/AvatarCircle";
import { useForm } from "react-hook-form";
import TextInput from "../components/customs/TextInput";
import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@tanstack/react-query";
import AuthAction from "../actions/auth";

interface FormValues {
  email: string;
  password: string;
}

const Register = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [notify, setNotify] = useState({ success: false, message: "" });

  const { mutate, isLoading } = useMutation(AuthAction.register, {
    onSuccess: (data) => {
      setNotify({ success: true, message: data.message });
    },
    onError: (err: any) => {
      setNotify({ success: false, message: err.message });
    },
  });

  const handleRegister = (data: FormValues) => {
    mutate(data);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left hidden md:block">
          <h1 className="text-5xl font-bold">Đăng ký ngay!</h1>
          <p className="py-6">
            Website chia sẻ video, cho phép người dùng tải lên, xem và chia sẻ
            video yêu thích. Giao diện thân thiện, tìm kiếm nâng cao, đa dạng
            các thể loại video. Tham gia cộng đồng, tương tác với người dùng
            khác và cập nhật xu hướng mới nhất.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-full md:max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="card-body">
              <div className="">
                <Link to={"/"}>
                  <div className="flex items-center btn-ghost space-x-2 btn text-primary">
                    <AvatarCircle />
                    <h1 className="text-lg capitalize">React Tube</h1>
                  </div>
                </Link>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <TextInput
                  rules={{
                    required: "Vui lòng nhập email",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Sai định dạng email",
                    },
                  }}
                  control={control}
                  error={errors}
                  name="email"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mật khẩu</span>
                </label>
                <TextInput
                  name="password"
                  control={control}
                  error={errors}
                  type="password"
                  rules={{ required: "Vui lòng nhập mật khẩu" }}
                />
                <div className="flex items-center justify-between">
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Quên mật khẩu?
                    </a>
                  </label>
                  <Link to={"/login"}>
                    <div className="label-text-alt link link-hover">
                      Đăng nhập
                    </div>
                  </Link>
                </div>
              </div>

              <div className="form-control mt-6">
                {notify.message ? (
                  notify.success ? (
                    <div className="text-success mb-2 text-sm flex gap-2 items-center ">
                      <FontAwesomeIcon icon={faCircleCheck} />
                      <p className="text-success">
                        {notify.message}
                      </p>
                    </div>
                  ) : (
                    <div className="text-error mb-2 text-sm flex gap-2 items-center ">
                      <FontAwesomeIcon icon={faCircleExclamation} />
                      <p className="text-error">
                        {notify.message}
                      </p>
                    </div>
                  )
                ) : (
                  ""
                )}

                <button disabled={isLoading} type="submit" className="btn btn-primary">
                  Đăng ký
                </button>
              </div>
              <div className="divider">OR</div>
              <div className="flex mt-2">
                <button className="btn gap-2 w-full btn-neutral text-neutral-content">
                  <FontAwesomeIcon icon={faGoogle} />
                  Đăng nhập với Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
