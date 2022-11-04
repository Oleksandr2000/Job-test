import { useFormik } from "formik";
import React from "react";
import Button from "../../components/Button/Button";
import FormControl from "../../components/FormControl";
import { useAppDispatch } from "../../hooks/useContextHooks";
import { handleModal } from "../../redux/slice/AdverstaningSlice/AdversteningSlice";

import styles from "./ApplyLayout.module.scss";
import { ApplyLayoutProps } from "./ApplyLayout.props";

const ApplyLayout = ({ handlerSubmit, initialValues, validationSchema }: ApplyLayoutProps) => {
	const dispatch = useAppDispatch();
	const ApplyForm = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,

		onSubmit(values): any {
			if (values) {
				dispatch(handlerSubmit(values));
			}
			ApplyForm.resetForm();
			dispatch(handleModal(false));
		},
	});

	return (
		<div className={styles.root}>
			<form onSubmit={ApplyForm.handleSubmit}>
				<h2>LEAVE YOUR CONTACTS</h2>
				<FormControl
					id="email"
					variant="small"
					type="text"
					label="E-mail"
					name="email"
					placeholder="Enter E-mail"
					value={ApplyForm.values.email}
					handlerVlue={ApplyForm.setFieldValue}
					onBlur={ApplyForm.handleBlur}
					error={ApplyForm.errors.email}
					touched={ApplyForm.touched.email}
				/>

				<FormControl
					id="name"
					variant="small"
					type="text"
					label="Name"
					name="name"
					placeholder="Enter name"
					value={ApplyForm.values.name}
					handlerVlue={ApplyForm.setFieldValue}
					onBlur={ApplyForm.handleBlur}
					error={ApplyForm.errors.name}
					touched={ApplyForm.touched.name}
				/>

				<FormControl
					id="number"
					variant="small"
					type="text"
					label="Number"
					name="number"
					placeholder="Enter number"
					value={ApplyForm.values.number}
					handlerVlue={ApplyForm.setFieldValue}
					onBlur={ApplyForm.handleBlur}
					error={ApplyForm.errors.number}
					touched={ApplyForm.touched.number}
				/>
				<div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
					<Button color="dark-blue" variant="fill" size="medium" type="submit">
						Enter
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ApplyLayout;
