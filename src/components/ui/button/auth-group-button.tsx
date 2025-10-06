import { Button } from ".";

function AuthGroupButton() {
	return (
		<div className="flex items-center space-x-4">
			<Button>SIGN UP</Button>
			<Button variant="secondary">LOG IN</Button>
		</div>
	);
}

export default AuthGroupButton;
