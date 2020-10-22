import { React } from '../../../deps.ts';

const Inputs: any = () => {
  const [username, setUsername] = (React as any).useState('');
  const [password, setPassword] = (React as any).useState('');

  const usernameOnChange = (e: any) => {
    setUsername(e.target.value);
  };

  const passwordOnChange = (e: any) => {
    setPassword(e.target.value);
  };

  const submit = (path: string) => {
    // client-side validation
    if (username.trim() === '' || password.trim() === '') {
      // can't do alert, don't know why
      return;
    }
    console.log(username, password);
    fetch(`/${path}`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-type': 'Application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (!data.sucess) {
          console.log(data.message);
        } else {
          console.log(data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="inputs">
        <input
          id="input-username"
          type="text"
          value={username}
          onChange={usernameOnChange}
          placeholder="Username"
        ></input>
        <p></p>
        <input
          id="input-password"
          type="password"
          value={password}
          onChange={passwordOnChange}
          placeholder="Password"
        ></input>
        <p></p>
      </div>
      <div className="buttons">
        <button
          id="login"
          onClick={(evt: any) => {
            submit(evt.target.id);
          }}
        >
          Log in
        </button>
        <button
          id="register"
          onClick={(evt: any) => {
            submit(evt.target.id);
          }}
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Inputs;
