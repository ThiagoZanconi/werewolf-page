function HowToPlay() {

  return (
    <>
    <div className="">
        <h1 className='flex mb-5 slide-in-right'>
          How To Play Werewolf
        </h1>
        <div className='flex border-2 border-red-900 rounded-md p-4 gap-4 bg-gray-800 slide-in-left mb-5'>
            
            <p className="text-2xl text-justify">
                The game consists of two teams: the werewolf and his followers,
                    and the villagers (with the jester, who will be explained later on).
                    For a team to win, they must eliminate all the players on the opposing team. Each team has different roles, and each of them has
                    unique abilities that can be used to achieve victory.
                    <br></br><br></br>
                The game consists of two phases: night and day. At night, players will use their abilities to attack, survive attacks from
                    the opposing team, gain information, etc. The werewolf team knows who the villagers are and who their teammates are. In contrast,
                    the villagers must figure out who the werewolves are in order to eliminate them. If the werewolf is killed, and it is not the last of his team,
                    a teammate will take his place as the werewolf.
                    <br></br><br></br>
                During the day, players will have time (as much as they want, although a timer can be set if desired) to discuss who the
                    werewolves might be (werewolves are encouraged to pretend being villagers) and, at the end of the discussion, players can vote for someone to
                    be put on trial. After his defense, the rest of the players will individually vote on whether they want to eliminate (by hanging) him
                    or not (the player is eliminate if the majority votes so). After that, the round ends, night falls, and a new round begins.
                <br></br><br></br>
                There is one role that plays solo: the jester. The jester wins only by getting himself hanged at the end of the round.
                The game starts at night, each player is secretly assigned a role and should perform their actions discreetly
                <br></br><br></br>  
                Now you may set a time to discuss to find out who the werewolves are.
                Everyone can comment his role (or lie about it), or comment what ability did he use at night (or lie about it).
                After the set time is completed, all players vote at the same time. If it's a draw, no one is hanged and you shall continue to the next round.
                If someone is selected, he/she has a chance to defend himself and say whatever he wishes.
                After his/her defense, everyone votes at the same time if he wishes to hang the accused player or to save him (thumbs up / thumbs down).
                If the majority wants to hang him, select the player and continue to next round
            </p>
           
        </div>

    </div>
      
    </>
  )
}

export default HowToPlay