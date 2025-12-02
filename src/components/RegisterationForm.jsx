import styles from "./RegisterationForm.module.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";

import { useEffect, useState } from "react";
function RegisterationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (email.length > 0 && !email.includes("@")) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }, 800);

    return () => {
      clearTimeout(handler);
    };
  }, [email]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (
        confirmPassword.length > 0 &&
        password.length > 0 &&
        confirmPassword !== password
      ) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }, 400);

    return () => {
      clearTimeout(handler);
    };
  }, [confirmPassword, password]);
  return (
    <div className={styles.container}>
      <span className={styles.background}></span>
      <div className={`${styles.formBox} ${styles.register}`}>
        <h2>Sign Up</h2>
        <form>
          <div className={styles.inputStyle}>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>User Name</label>
            <FaUser className={styles.icon} />
          </div>
          <div className={styles.inputStyle}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email Address</label>
            <MdEmail className={styles.icon} />
            {emailError && (
              <span className={styles.message}> Email is not valid</span>
            )}
          </div>
          <div className={styles.inputStyle}>
            <input
              type={showPassword ? "text" : "password"}
              required
              minlength="8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
            {showPassword ? (
              <FaLockOpen
                className={styles.icon}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaLock
                className={styles.icon}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          <div className={styles.inputStyle}>
            <input
              type={showConfirm ? "text" : "password"}
              required
              minlength="8"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label>Confirm Password</label>
            {showConfirm ? (
              <FaLockOpen
                className={styles.icon}
                onClick={() => setShowConfirm(!showConfirm)}
              />
            ) : (
              <FaLock
                className={styles.icon}
                onClick={() => setShowConfirm(!showConfirm)}
              />
            )}
            {passwordError ? (
              <span className={styles.message}> Passwords do not match</span>
            ) : confirmPassword.length > 0 && password.length > 0 ? (
              <span className={styles.message}> Password confirmed!</span>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            disabled={emailError || passwordError}
            className={styles.submitButton}
          >
            Register
          </button>
        </form>
      </div>
      <div className={`${styles.info} ${styles.register}`}>
        <h2>Create your own experience!</h2>
        <p>Gives the world inside your hands!</p>
      </div>
    </div>
  );
}

export default RegisterationForm;
