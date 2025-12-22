import './step.css'

function Step({step1, step2, step3, step4, step5, step6}) {
    return (
        <div className="step_container">
            <div className="step">
                <ol>
                    <li>{step1}</li>
                    <li>{step2}</li>
                    <li>{step3}</li>
                    <li>{step4}</li>
                    <li>{step5}</li>
                    <li>{step6}</li>
                </ol>
            </div>
        </div>
    )

}

export default Step;