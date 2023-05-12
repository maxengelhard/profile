export function Description(props) {
    if (props.src==='about-me') { 
    return (
        <div>
            I'm a software / data engineer tha'ts passoniate about techonlogy and how it can solve problems.
            <button href='https://github.com/maxengelhard'>Github</button>
        </div>
    )
     }
     else if (props.src==='easy-layers') {
        return (
            <div>
                Easy Layers
            </div>
            )
     }
}