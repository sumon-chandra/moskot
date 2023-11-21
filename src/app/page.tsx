/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import classes from "./login.module.scss";
import { useCallback, useState, SyntheticEvent } from "react";

interface User {
	name?: { value: string };
	email: { value: string };
	password: { value: string };
}

const LoginPage = () => {
	const [variant, setVariant] = useState<"login" | "register">("login");

	const toggleVariant = useCallback(() => {
		if (variant === "login") {
			setVariant("register");
		} else {
			setVariant("login");
		}
	}, [variant]);

	function randomId() {
		return Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2);
	}

	const handleRegister = (e: SyntheticEvent) => {
		const target = e.target as typeof e.target & User;
		e.preventDefault();
		const user = {
			_id: randomId(),
			name: target.name?.value,
			email: target.email?.value,
			password: target.password?.value,
			role: "user",
		};
		console.log(user);
	};

	const handleLogin = (e: SyntheticEvent) => {
		const target = e.target as typeof e.target & User;
		e.preventDefault();
		const user = {
			email: target.email?.value,
			password: target.password?.value,
		};
		console.log(user);
	};

	return (
		<section className={classes.main}>
			<div className={classes.main__loginBox}>
				<Image src="/login.png" alt="Login Image" width={100} height={80} />
				<h4>
					Welcome to <span>Back</span>
				</h4>
				<form
					onSubmit={variant === "login" ? handleLogin : handleRegister}
					className={classes.main__loginBox__form}
				>
					<div className={classes.main__loginBox__form__inputs}>
						{variant === "register" && (
							<input
								type="text"
								name="name"
								placeholder="Enter your name"
							/>
						)}
						<input
							type="email"
							name="email"
							placeholder="Email address"
						/>
						<input
							type="password"
							name="password"
							placeholder="Password"
						/>
					</div>
					<p>Forgot password?</p>
					<button type="submit">
						{variant === "login" ? "Login" : "Register"}
					</button>
				</form>
				<div className={classes.main__loginBox__toggle}>
					{variant === "login" ? (
						<div>
							Don't have an account?{" "}
							<span onClick={toggleVariant}>Sign up</span>
						</div>
					) : (
						<div>
							Already have an account?{" "}
							<span onClick={toggleVariant}>Login</span>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
