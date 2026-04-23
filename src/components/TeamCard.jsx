const TeamCard = ({ member }) => (
    <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-[5/7]">
        <img
            src={member.imageUrl}
            alt={`Team Member ${member.name}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#283618] via-[#283618]/80 to-transparent p-6 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <div className="transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <h3 className="text-3xl font-semibold text-[#FEFAE0] leading-tight">{member.name}</h3>
                <p className="text-[#D4A373] uppercase tracking-wider font-medium my-2 text-sm">{member.role}</p>
                <div className="w-12 h-1 bg-[#D4A373] rounded-full my-3"></div>
                <p className="text-[#FEFAE0] text-sm leading-relaxed italic">"{member.quote}"</p>
            </div>
        </div>
    </div>
);

export default TeamCard;