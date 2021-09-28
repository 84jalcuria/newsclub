import { useState, useEffect } from "react";
import UrlInput from "@/pages/dashboard/shortener/components/urlinput";
import DescriptionInput from "@/pages/dashboard/shortener/components/descriptioninput";
import ShortenerButton from "@/pages/dashboard/shortener/components/shortenerbutton";
import { useForm } from "react-hook-form";
import ErrorMessage from "@/components/common/errormessage";
import { toast, ToastContainer } from "react-nextjs-toast";
import { useTranslations } from "next-intl";
import { useSession } from "@/utils/providers/sessionContextProvider";
import { useShorterUrl } from "@/utils/hooks/use-shorter-url";

interface DataForm {
	url: string;
	description: string;
	quote: boolean;
}

const ShortenerCard = () => {
	const { state: sessionState } = useSession();
	const {
		state: { shortening, success, failed },
		dispatch: shortenerDispatch,
		Short,
	} = useShorterUrl();

	const {
		register,
		handleSubmit,
		setFocus,
		reset,
		formState: { errors },
	} = useForm<DataForm>();
	const t = useTranslations("dashboard-shortener.card");

	useEffect(() => {
		setFocus("url");
	}, []);

	useEffect(() => {
		if (failed) {
			window.alert("Network error");
		}
	}, [failed]);

	useEffect(() => {
		if (success.success) {
			if (success.msg === "Created") {
				toast.notify(t("toast.message-created"), {
					title: t("toast.title"),
					type: "success",
					duration: 7,
				});
			} else if (success.msg === "Found") {
				toast.notify(t("toast.message-found"), {
					title: t("toast.title"),
					type: "error",
					duration: 7,
				});
			}

			reset();
		}
	}, [success.success]);

	const onShortener = async (data: DataForm) => {
		const { url, description, quote } = data;
		const userId = sessionState?.session?.id;

		await Short(shortenerDispatch, {
			url,
			description,
			userId,
			monetize: quote,
		});
	};

	const url = register("url", {
		required: {
			value: true,
			message: t("url.error.required"),
		},
		pattern: {
			value:
				/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
			message: t("url.error.format"),
		},
	});

	const description = register("description");

	const quote = register("quote");

	return (
		<form
			onSubmit={handleSubmit(onShortener)}
			className='w-full max-w-md bg-gray-50 shadow-2xl rounded-md 
    flex flex-col justify-center items-center my-8'>
			{/*-----------------------Url Forms Inputs--------------------------*/}

			<div className='w-full flex flex-col justify-center items-center space-y-5 p-5'>
				<h1 className='capitalize text-gray-800 text-base font-medium tracking-tight'>
					{t("title")}
				</h1>
				<div className='w-full relative z-30'>
					<UrlInput
						placeholder={t("url.placeholder")}
						name={url.name}
						inputRef={url.ref}
						onChange={url.onChange}
						onBlur={url.onBlur}
						error={!!errors?.url}
					/>
					{errors?.url && (
						<div className='absolute sm:top-7 sm:left-0'>
							{" "}
							<ErrorMessage message={errors.url.message} />
						</div>
					)}
				</div>
				<div className='w-full relative z-30'>
					{!errors.url && (
						<h1 className='absolute -top-1 left-1 text-gray-400 text-xs capitalize'>
							{t("description.label")}
						</h1>
					)}
					<div className='w-full mt-4 '>
						<DescriptionInput
							placeholder={t("description.placeholder")}
							name={description.name}
							inputRef={description.ref}
							onChange={description.onChange}
							onBlur={description.onBlur}
							error={!!errors?.description}
						/>
					</div>
				</div>
				{/*-----------------CheckBox--------------------*/}
				<div className='relative flex items-center ml-1 self-start'>
					<input
						ref={quote.ref}
						name={quote.name}
						onChange={quote.onChange}
						onBlur={quote.onBlur}
						type='checkbox'
						id='A3-yes'
						value='yes'
					/>
					<h1 className='select-none ml-1 text-green-600 text-xs font-semibold tracking-tight '>
						{t("quote.placeholder")}
					</h1>
				</div>

				<ShortenerButton
					label={t("button.placeholder")}
					submitting={shortening}
					loadingMetadata={false}
				/>
			</div>
			<ToastContainer />
		</form>
	);
};

export default ShortenerCard;
