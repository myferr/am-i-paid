import { clients } from '$lib/clients.js';

export const GET = ({ url }) => {
	const client = String(url.searchParams.get('client') ?? null);
	const didClientPay = clients[client as keyof typeof clients];
	const paid = didClientPay.paymentReceived;
	return new Response(JSON.stringify({ paid }), { status: 200 });
};
