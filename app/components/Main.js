import React from "react";

class Main extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div className="container">
				<div className="header">
				Header
				</div>
					<div className="container">

					
						<div className="row">
							<div className="col-md-4">	
								<h3>col-md-4</h3>
								<div className="well">
									<table>
										<tr>001</tr>
										<tr>002</tr>
										<tr>003</tr>
										<tr>004</tr>
									</table>
									</div>
									<br/>
									<div className="well">
									<h1>Well</h1>
									</div>					
							</div>
							<div className="col-md-8">
								<h3>col-md-8</h3>					
							</div>
						</div>
					</div>
				<div className="footer">
				Footer
				</div>

			</div>
			)
	}
}

export default Main;