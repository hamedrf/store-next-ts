const Login = () => {
  return (
    <div
      className="h-screen w-screen bg-second flex justify-center items-center"
      style={{ marginTop: "-10vh" }}
    >
      <div className="!border  border-red-900 rounded-2xl bg-white ">
        <form className="flex flex-col justify-center items-center">
          <input
            type="text"
            name="name"
            className="border rounded-2xl !py-3 !px-2 mx-2 !my-4"
            placeholder="نام"
          />
          <input
            type="text"
            name="description"
            className="border rounded-2xl !py-3 !px-2 mx-2 !my-4"
            placeholder="توضیحات"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-2xl px-4 py-2 !my-4"
          >
            {" "}
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
