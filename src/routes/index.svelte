<script context="module">
	import { base, assets } from '$app/paths';

	export async function load({ fetch }) {
		const from_endpoint = await fetch(`${base}/endpoint.txt`).then(r => r.text());
		const from_asset = await fetch(`${assets}/asset.txt`).then(r => r.text());

		return {
			props: { from_endpoint, from_asset }
		}
	}
</script>

<script>
	/** @type {string} */
	export let from_endpoint;

	/** @type {string} */
	export let from_asset;
</script>

<p>from endpoint: {from_endpoint}</p>
<p>from asset: {from_asset}</p>