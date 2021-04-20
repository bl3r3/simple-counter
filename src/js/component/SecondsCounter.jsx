import React, { useState, useEffect, useRef } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import {
	ClockHistory,
	PauseFill,
	PlayFill,
	StopFill,
	StopwatchFill
} from "react-bootstrap-icons";
import PropTypes from "prop-types";

function timerCounter() {
	const [timer, setTimer] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const countRef = useRef(null);

	// fuctions

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(true);
		countRef.current = setInterval(() => {
			setTimer(timer => timer + 1);
		}, 1000);
	};

	const handlePause = () => {
		clearInterval(countRef.current);
		setIsPaused(false);
	};

	const handleResume = () => {
		setIsPaused(true);
		countRef.current = setInterval(() => {
			setTimer(timer => timer + 1);
		}, 1000);
	};

	const handleReset = () => {
		clearInterval(countRef.current);
		setIsActive(false);
		setIsPaused(false);
		setTimer(0);
	};

	return (
		<Container className="container-height justify-content-center">
			<Row className="d-flex flex-row align-items-center justify-content-space-around main">
				<Col xs={2} className="second p-2">
					<ClockHistory />
				</Col>
				<Col xs={2} className="second">
					{Math.floor(timer / 10000) % 10}
				</Col>
				<Col xs={2} className="second">
					{Math.floor(timer / 1000) % 10}
				</Col>
				<Col xs={2} className="second">
					{Math.floor(timer / 100) % 10}
				</Col>
				<Col xs={2} className="second">
					{Math.floor((timer / 10) % 10)}
				</Col>
				<Col xs={2} className="second">
					{timer % 10}
				</Col>
				<Row className="d-flex flex-row align-items-center w-100 justify-content-center">
					<Col xs={2}>
						<Button
							variant="success"
							className="w-100"
							onClick={handleStart}
							disabled={isActive}>
							<PlayFill />
							Start
						</Button>
					</Col>
					<Col xs={2}>
						<Button
							variant="warning"
							className="w-100"
							onClick={handlePause}
							disabled={!isPaused}>
							<PauseFill />
							Pause
						</Button>
					</Col>

					<Col xs={2}>
						<Button
							variant="primary"
							className="w-100"
							onClick={handleResume}
							disabled={isPaused || !isActive}>
							<StopwatchFill /> Resumen
						</Button>
					</Col>

					<Col xs={2}>
						<Button
							variant="danger"
							className="w-100"
							onClick={handleReset}>
							<StopFill />
							Reset
						</Button>
					</Col>
				</Row>
			</Row>
		</Container>
	);
}

export default timerCounter;
