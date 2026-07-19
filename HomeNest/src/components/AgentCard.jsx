import "./AgentCard.css";

function AgentCard({ agent }) {
  return (
    <div className="agent-card">

      <img
        src={agent.photo}
        alt={agent.name}
        className="agent-img"
      />

      <h3>{agent.name}</h3>

      <h4>{agent.role}</h4>

      <p>{agent.bio}</p>

    </div>
  );
}

export default AgentCard;