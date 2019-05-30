pragma solidity 0.5.4;

contract Owner {
    
    address private owner;
    
    constructor() public {
        owner = msg.sender;
    }
    
    modifier onlyOwner {
        require(owner == msg.sender);
        _;
    }
}

contract Raffle is Owner {
    enum RaffleState { OPEN, SUSPENDED, CLOSED }
    RaffleState raffleState;
    
    function suspendRaffle() public onlyOwner {
        raffleState = RaffleState.SUSPENDED;
    }
    
}