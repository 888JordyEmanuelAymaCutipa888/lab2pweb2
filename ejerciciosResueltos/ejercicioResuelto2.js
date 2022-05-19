function votesCouting(votes){
    let counting = Array(n).fill(0);
    for(idx in votes){
	counting[votes[idx]]++
    }
    let maxVotes = 0;
    let winnerID = 0;
    for(id in counting){
	if(counting[id] = maxVotes){
	    maxVotes = counting;
	    winnerID = id;
	}
    }
    return { id: winnerID, votes: maxVotes }
}
