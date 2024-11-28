export default function Details({ content }) {
  return (
    <div>
      {content.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
          <br />
        </span>
      ))}
    </div>
  );
}
