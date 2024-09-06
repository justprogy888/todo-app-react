import "./HomePage.scss"

const HomePage = () => {

	return (
		<main id="home">
			<div className="instructions">
				<p className="instruction-title">ToDo app</p>
				<p className="instruction-author">By YC</p>
				<div className="instructions-block">
					<ul className="main-list"> 
						<li className="li-title">Homepage
							<ul className="included-list">
								<li>
									You are here
								</li>
							</ul>
						</li>
						<li className="li-title">
							ToDo page
							<ul className="included-list">
								<li>Page, where are your todos located</li>
								<li>ToDos here have 3 buttons, "Favourite" - the star, "Redact" - does as it says, and "Delete"
									</li>
								<li>ToDos have checkboxes to mark ToDo as "Done"</li>
								<li>If ToDo is deleted, it will be at "Trash bin", and you will be able to restore it</li>
							</ul>
						</li>
						<li className="li-title">
							Trash bin page
							<ul className="included-list">
								<li>
									Page, where are your deleted todos
								</li>
								<li>
									You can preview the todos, delete, or restore them.
									After restoring, they appear on ToDo page, if you click delete, they delete forever.
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</main>
	)
}

export default HomePage