import React from "react";
import { MDBInputGroup } from "mdbreact";

function Form() {
	return (
			<MDBInputGroup
				inputs={
					<>
						<select className="browser-default custom-select form-item">
							<option value="1">Beer</option>
							<option value="2">Liquor</option>
							<option value="3">Wine</option>
						</select>
						<input
							type="text"
							className="form-control form-item"
							id="formGroupExampleInput"
							placeholder="Location"
						/>
					</>
				}
			/>
	);
}

export default Form;
