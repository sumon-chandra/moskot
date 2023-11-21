/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import classes from "./login.module.scss";
import { useCallback, useState, SyntheticEvent } from "react";
import { useRegisterUserMutation } from "./redux/features/api/authApi";
import { toast } from "sonner";

export interface UserData {
	name?: { value: string };
	email: { value: string };
	password: { value: string };
}

const LoginPage = () => {
	const [variant, setVariant] = useState<"login" | "register">("login");
	const [isLoading, setIsLoading] = useState(false);
	const [registerUser] = useRegisterUserMutation();

	const toggleVariant = useCallback(() => {
		if (variant === "login") {
			setVariant("register");
		} else {
			setVariant("login");
		}
	}, [variant]);

	const handleRegister = (e: SyntheticEvent) => {
		setIsLoading(true);
		const target = e.target as typeof e.target & UserData;
		e.preventDefault();
		const user = {
			name: target.name?.value!,
			email: target.email?.value,
			password: target.password?.value,
		};
		registerUser(user)
			.then((res: any) => {
				setIsLoading(false);
				if (res.data?.success === true) {
					toast.success(res?.data?.message);
				} else {
					toast.error(res?.data?.message);
				}
			})
			.finally(() => setIsLoading(false));
	};

	const handleLogin = (e: SyntheticEvent) => {
		const target = e.target as typeof e.target & UserData;
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
							disabled={isLoading}
						/>
						<input
							type="password"
							name="password"
							placeholder="Password"
							disabled={isLoading}
						/>
					</div>
					<p>Forgot password?</p>
					<button type="submit" disabled={isLoading}>
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
