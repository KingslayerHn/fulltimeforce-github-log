export interface commitInterface {
  sha: string;
  node_id: string;
  commit: Commit;
  url: string;
  html_url: string;
  comments_url: string;
  author?: any;
  committer?: any;
  parents: any[];
}

interface Author {
  name: string;
  email: string;
  date: Date;
}

interface Committer {
  name: string;
  email: string;
  date: Date;
}

interface Tree {
  sha: string;
  url: string;
}

interface Verification {
  verified: boolean;
  reason: string;
  signature?: any;
  payload?: any;
}

interface Commit {
  author: Author;
  committer: Committer;
  message: string;
  tree: Tree;
  url: string;
  comment_count: number;
  verification: Verification;
}
