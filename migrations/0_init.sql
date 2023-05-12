CREATE TABLE auth_user (
    id VARCHAR(15) NOT NULL,
    PRIMARY KEY (id),

    username VARCHAR(255) NOT NULL,
    avatar_url VARCHAR(255)
);

CREATE TABLE auth_session (
    id VARCHAR(127) NOT NULL,
    user_id VARCHAR(15) NOT NULL,
    active_expires BIGINT UNSIGNED NOT NULL,
    idle_expires BIGINT UNSIGNED NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE auth_key (
    id VARCHAR(255) NOT NULL,
    user_id VARCHAR(15) NOT NULL,
    primary_key TINYINT UNSIGNED NOT NULL,
    hashed_password VARCHAR(255),
    expires BIGINT UNSIGNED,
    PRIMARY KEY (id)
);