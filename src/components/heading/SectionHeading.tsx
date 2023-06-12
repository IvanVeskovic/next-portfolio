export default function SectionHeading({ title }: { title: string }) {
    return (
        <div className="heading">
            <h2 className="heading__main">{title}</h2>
            <span className="heading__background">{title}</span>
        </div>
    )
}