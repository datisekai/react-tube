import React, { useContext } from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Navigate } from "react-router-dom";
import AvatarCircle from "../components/AvatarCircle";
import useLoginGoogle from "../components/hooks/useLoginGoogle";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { handleSignIn, loading, error } = useLoginGoogle();

  const {user} = useContext(AuthContext)

  if(user){
    return <Navigate to={'/'} replace/>
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left hidden md:block">
          <h1 className="text-5xl font-bold">Đăng nhập ngay!</h1>
          <p className="py-6">
            Website chia sẻ video, cho phép người dùng tải lên, xem và chia sẻ
            video yêu thích. Giao diện thân thiện, tìm kiếm nâng cao, đa dạng
            các thể loại video. Tham gia cộng đồng, tương tác với người dùng
            khác và cập nhật xu hướng mới nhất.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-full md:max-w-sm shadow-2xl bg-base-100">
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
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mật khẩu</span>
              </label>
              <input
                type="text"
                placeholder="Mật khẩu"
                className="input input-bordered"
              />
              <div className="flex items-center justify-between">
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Quên mật khẩu?
                  </a>
                </label>
                <Link to={"/register"}>
                  <div className="label-text-alt link link-hover">Đăng ký</div>
                </Link>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Đăng nhập</button>
            </div>
            <div className="divider">OR</div>
            {error && (
              <div className="text-error flex gap-2 items-center mt-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>{error}</p>
              </div>
            )}
            <div className="flex mt-2">
              <button
                disabled={loading}
                onClick={handleSignIn}
                className="btn gap-2 w-full btn-neutral text-neutral-content"
              >
                <FontAwesomeIcon icon={faGoogle} />
                Đăng nhập với Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
