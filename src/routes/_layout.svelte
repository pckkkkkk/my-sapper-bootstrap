<header>
	<p>header</p>
</header>

<main>
	<slot></slot>
</main>

<footer>
	<p>footer</p>
</footer>

<style lang="scss">
	$one: 1rem;
	
	main {
		flex: 1;
	}
	
	footer {
		flex-shrink: 1;
	}
	
	footer, header {
		text-align: center;
	}
	
	p {
		padding: $one;
	}
</style>