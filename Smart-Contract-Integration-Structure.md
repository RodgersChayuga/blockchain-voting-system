# Project Structure

**contracts/**
  - `VotingSystem.sol`: Main smart contract
  - `IVotingSystem.sol`: Contract interface (optional)

**lib/**
  - `contracts`:
    - `index.ts`: Contract addresses and ABIs
  - `hooks`:
    - `useVoter.ts`: Voter-related operations
    - `useElection.ts`: Election-related operations
    - `useVoting.ts`: Voting operations

## Example Contract Interface Structure

**lib/contracts/hooks/useVoter.ts**
```javascript
import { useContractWrite, useContractRead } from 'wagmi';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../index';

export function useVoter() {
  // Registration
  const { writeAsync: register } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'registerVoter'
  });

  // Get voter info
  const { data: voterInfo } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getVoterInfo',
    args: [/* voter address */]
  });

  // Update voter info
  const { writeAsync: updateInfo } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'updateVoterInfo'
  });

  return {
    register,
    voterInfo,
    updateInfo
  };
}
```

## Example Usage in Components
**components/auth/RegisterForm.tsx**

```Javascript
const { register } = useVoter();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await register({ args: [/* your registration data */] });
  } catch (error) {
    console.error('Registration failed:', error);
  }
};
```

**components/voting/VotingPanel.tsx**

```Javascript
const { writeAsync: castVote } = useContractWrite({
  address: CONTRACT_ADDRESS,
  abi: CONTRACT_ABI,
  functionName: 'castVote'
});

const handleVoteSubmit = async () => {
  try {
    await castVote({ args: [selectedCandidate] });
  } catch (error) {
    console.error('Voting failed:', error);
  }
};
```