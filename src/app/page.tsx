/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import classes from "./login.module.scss";
import { useCallback, useState, SyntheticEvent } from "react";
import { useLoginUserMutation, useRegisterUserMutation } from "./redux/features/api/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loggedInUser } from "./redux/features/authSlice";

export interface UserData {
	name?: { value: string };
	email: { value: string };
	password: { value: string };
}

const LoginPage = () => {
	const [variant, setVariant] = useState<"login" | "register">("login");
	const [isLoading, setIsLoading] = useState(false);
	const [registerUser] = useRegisterUserMutation();
	const [loginUser] = useLoginUserMutation();
	const router = useRouter();
	const dispatch = useDispatch();

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
					toggleVariant();
				} else {
					toast.error(res?.data?.message);
				}
			})
			.finally(() => setIsLoading(false));
	};

	const handleLogin = (e: SyntheticEvent) => {
		setIsLoading(true);
		const target = e.target as typeof e.target & UserData;
		e.preventDefault();
		const user = {
			email: target.email?.value,
			password: target.password?.value,
		};
		loginUser(user)
			.then((res: any) => {
				setIsLoading(false);
				if (res.data?.success === true) {
					toast.success(res?.data?.message);
					console.log(res.data.data);
					dispatch(loggedInUser({ token: res?.data?.data }));
					router.push("/dashboard");
				} else if (res?.error) {
					toast.error(res?.error?.data?.message);
				}
			})
			.finally(() => setIsLoading(false));
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
