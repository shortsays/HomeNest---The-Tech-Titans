import "./AgentCard.css";

function AgentCard({ agent }) {
  return (
    <div className="agent-card">
      <img src={agent.image} alt={agent.name} />

      <h3>{agent.name}</h3>

      <h5>{agent.role}</h5>

      <p>{agent.bio}</p>
    </div>
  );
}

export default AgentCard;