export const Teams = () => {
    const { teams } = useTeams();
    return (
        <div>
            {teams.map(team => (
                <div key={team.id}>{team.name}</div>
            ))}
        </div>
    );
};