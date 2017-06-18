import React from "react";
import FailTable from "./children/FailTable.js";
import Form from "./children/Form.js";

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
								
									<br/>
									<div className="well">
									<Form />
									<br/>
									</div>	
									<div className="well">
										<FailTable />
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