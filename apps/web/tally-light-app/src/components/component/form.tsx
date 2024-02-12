'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Form() {
	async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const email = formData.get('email') as string;
		const response = await fetch('https://api.convertkit.com/v3/forms/6193890/subscribe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
				tags: [4509863],
			}),
		});
		console.log(email);
        if (!response.ok) {
            alert('Something went wrong. Please try again.');
            return;
        }
        event.currentTarget.reset();
		alert('Thank you for signing up! Check your email to confirm your subscription.');
	}

	return (
		<div className="mx-auto w-full max-w-sm space-y-2">
			<form className="flex space-x-2" onSubmit={onSubmit}>
				<Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" name="email" />
				<Button type="submit">Sign Up</Button>
			</form>
			<p className="text-xs text-gray-500">
				Sign up to get notified when we launch.
				<Link className="underline underline-offset-2" href="#">
					Terms & Conditions
				</Link>
			</p>
		</div>
	);
}
